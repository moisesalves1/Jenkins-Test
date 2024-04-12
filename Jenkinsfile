pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                // Use Node.js and npm installed on the Jenkins agent
                sh 'node --version'
                sh 'cd jenkins-test'
                sh  'npm install'
                
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