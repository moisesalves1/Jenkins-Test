pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                // Use Node.js and npm installed on the Jenkins agent
                bat 'npm install'
                
            }
        }


        stage('Linting') {
            steps {
                // Build the Angular app
                bat 'npm run lint'
            }
        }

        stage('Testing') {
            steps {
                // Build the Angular app
                bat 'npm run jenkinstest'
            }
        }

        stage('Build Angular App') {
            steps {
                // Build the Angular app
                bat 'npm run build'
            }
        }

        stage('Deploy Angular App') {
            steps {
                // Build the Angular app
                bat 'xcopy dist\\jenkins-test\\* C:\\inetpub\\wwwroot\\develop /e /y'
            }
        }
    }

} 