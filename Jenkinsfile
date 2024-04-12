pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                // Use Node.js and npm installed on the Jenkins agent
                sh label:
                    'running npm install'
                script: '''
                    node --version
                    cd jenkins-test
                    npm install
                '''
            }
        }


        stage('Linting') {
            steps {
                // Build the Angular app
                sh 'npm run lint'
            }
        }

        stage('Testing') {
            steps {
                // Build the Angular app
                sh 'npm run test'
            }
        }

        stage('Build Angular App') {
            steps {
                // Build the Angular app
                sh 'npm run build'
            }
        }
    }

} 