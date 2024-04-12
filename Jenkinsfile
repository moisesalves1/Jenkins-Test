pipeline {
    agent any

    stages {

        stage('Echo Git Branch') {
            steps {
                // Use Node.js and npm installed on the Jenkins agent
                switch(GIT_BRANCH) {
                    case "develop":
                        result = "development"
                        break
                    case "master":
                        result = "production"
                        break
                    case "staging":
                        result = "staging"
                        break
                }
                echo result
                
            }
        }

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
                bat 'xcopy dist\\jenkins-test\\browser\\* C:\\inetpub\\wwwroot\\develop /e /y'
            }
        }
    }

} 