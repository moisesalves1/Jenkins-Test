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
                bat 'npm run test --watch=false'
            }
        }

        stage('Build Angular App') {
            steps {
                // Build the Angular app
                bat 'npm run build'
            }
        }
    }

} 