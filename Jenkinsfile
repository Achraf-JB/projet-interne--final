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

        stage('Install Dependencies') {
            steps {
                sh "npm install"
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
        
    }

    post {
        always {
            echo 'Pipeline finished'
        }
    }
}
