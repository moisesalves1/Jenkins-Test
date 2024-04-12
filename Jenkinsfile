pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Check out the source code from your repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Use Node.js and npm installed on the Jenkins agent
                sh 'npm install'
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