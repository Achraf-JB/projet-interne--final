pipeline {
    agent any
    
    tools{
        jdk 'jdk17'
        nodejs 'node22'
    }
    environment {
        SCANNER_HOME=tool 'sonar-scanner'
    }

    stages {
        
        stage('Clean Workspace'){
            steps{
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
                    sh ''' $SCANNER_HOME/bin/sonar-scanner -Dsonar.projectName=react-app \
                    -Dsonar.projectKey=react-app '''
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
        stage('OWASP FS Scan') {
            steps {
                dependencyCheck additionalArguments: '--scan ./ --disableYarnAudit --disableNodeAudit', odcInstallation: 'DB-check'
                dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
            }
        }

        stage('Trivy Scan File System') {
            steps {
                 sh "trivy fs --format table -o trivy-fs-report.html ."
            }
        }
        stage('Build') {
            steps {
                 withCredentials([file(credentialsId: 'mynpm-cred', variable: 'my-npmrc')]) {
                      echo "performing npm  building"
                      sh "npm install --userconfig $my-npmrc  --registry=http://4.222.216.142:8081/repository/my-group/  --loglevel verbose"
               }
            }
        }
        stage('publish to nexus') {
            steps {
                 withCredentials([file(credentialsId: 'mynpm-cred', variable: 'my-npmrc')]) {
                      echo "performing npm  publish"
                      sh "npm publish --userconfig $my-npmrc --loglevel verbose"
               }
            }
        }
        stage('Build & Tag Docker Image') {
            steps {
               withDockerRegistry(credentialsId: 'docker', toolName: 'docker') {
                 sh "docker build -t achraf899/react-app:latest ."

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
               withDockerRegistry(credentialsId: 'docker', toolName: 'docker') {
                 sh "docker push  achraf899/react-app:latest"

               }
            }
        }
         
        
    }

    post {
        always {
            echo 'Pipeline finished'
        }
    }
}
