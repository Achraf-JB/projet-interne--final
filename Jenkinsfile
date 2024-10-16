pipeline {
    agent any
    
    tools {
        jdk 'jdk17'
        nodejs 'node22'
    }

    environment {
        SCANNER_HOME = tool 'sonar-scanner'
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Git Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Achraf-JB/projet-interne--final.git'
            }
        }

        stage("Sonarqube Analysis") {
            steps {
                withSonarQubeEnv('sonar-server') {
                    sh ''' 
                    $SCANNER_HOME/bin/sonar-scanner -Dsonar.projectName=react-app \
                    -Dsonar.projectKey=react-app 
                    '''
                }
            }
        }

        stage("Quality Gate") {
            steps {
                script {
                    waitForQualityGate abortPipeline: false, credentialsId: 'Sonar-token'
                }
            } 
        }

        stage('Trivy Scan File System') {
            steps {
                sh "trivy fs --format table -o trivy-fs-report.html ."
            }
        }

        stage('Build') {
            steps {
                withCredentials([file(credentialsId: 'mynpm-cred', variable: 'mynpmrc')]) {
                    echo "performing npm building"
                    sh "npm install --userconfig $mynpmrc --registry=http://4.222.216.142:8081/repository/my-group/ --loglevel verbose"
                }
            }
        }

        stage('Publish to Nexus') {
            steps {
                withCredentials([file(credentialsId: 'mynpm-cred', variable: 'mynpmrc')]) {
                    echo "performing npm publish"
                    sh "npm publish --userconfig $mynpmrc --loglevel verbose"
                }
            }
        }

        stage('Build & Tag Docker Image') {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'docker', toolName: 'docker') {
                        sh "docker build -t achraf899/react-app:${BUILD_NUMBER} ."
                    }
                }
            }
        }

        stage('Trivy Scan Image') {
            steps {
                sh "trivy image --format table -o trivy-image-report.html achraf899/react-app:latest"
            }
        }

        stage('Publish Docker Image') {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'docker', toolName: 'docker') {
                        sh "docker push achraf899/react-app:${BUILD_NUMBER}"
                    }
                }
            }
        }

        stage('Checkout K8S manifest SCM') {
            steps {
                git branch: 'main', credentialsId: 'github-token', url: 'https://github.com/Achraf-JB/cicd-manifests-repo.git'
            }
        }

        stage('Update K8S manifest & push to Repo') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'github-token', usernameVariable: 'GIT_USERNAME', passwordVariable: 'GIT_PASSWORD')]) {
                        sh """
                        sed -i "s|achraf899/react-app:[0-9]*|achraf899/react-app:${BUILD_NUMBER}|g" deploy.yaml
                        git config --global user.email "your-email@example.com"
                        git config --global user.name "Your Name"
                        git add deploy.yaml
                        git commit -m "Updated the deploy yaml | Jenkins Pipeline"
                        git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/Achraf-JB/cicd-manifests-repo.git HEAD:main
                        """
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                // Retrieve job details
                def jobName = env.JOB_NAME
                def buildNumber = env.BUILD_NUMBER
                def pipelineStatus = currentBuild.result ?: 'UNKNOWN'
                def bannerColor = pipelineStatus.toUpperCase() == 'SUCCESS' ? 'green' : 'red'

                // Build the email body
                def body = """
                <html>
                <body>
                    <div style="border: 4px solid ${bannerColor}; padding: 10px;">
                        <h2>${jobName} - Build ${buildNumber}</h2>
                        <div style="background-color: ${bannerColor}; padding: 10px;">
                            <h3 style="color: white;">Pipeline Status: ${pipelineStatus.toUpperCase()}</h3>
                        </div>
                        <p>Check the <a href="${env.BUILD_URL}">console output</a>.</p>
                    </div>
                </body>
                </html>
                """

                // Send the email
                emailext(
                    subject: "${jobName} - Build ${buildNumber} - ${pipelineStatus.toUpperCase()}",
                    body: body,
                    to: 'achraf.jarboui@ensi-uma.tn',
                    from: 'jenkins@example.com',
                    replyTo: 'jenkins@example.com',
                    mimeType: 'text/html',
                    attachmentsPattern: 'trivy-image-report.html'
                )
            }
        }
    }
}
