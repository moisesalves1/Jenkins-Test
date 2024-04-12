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
                script {
                // Use Node.js and npm installed on the Jenkins agent
                    switch(GIT_BRANCH) {
                        case "develop":
                            environment = "development"
                            break
                        case "master":
                            environment = "production"
                            break
                        case "staging":
                            environment = "staging"
                            break
                    }
                }
                // Build the Angular app
                bat "npm run -- ng build --configuration=${environment}"
            }
        }

        stage('Deploy Angular App') {
            script {
                // Use Node.js and npm installed on the Jenkins agent
                    switch(GIT_BRANCH) {
                        case "develop":
                            deploy = "development"
                            break
                        case "master":
                            deploy = "production"
                            break
                        case "staging":
                            deploy = "staging"
                            break
                    }
                }
            steps {
                // Build the Angular app
                bat "xcopy dist\\jenkins-test\\browser\\* C:\\inetpub\\wwwroot\\${GIT_BRANCH} /e /y"
            }
        }
    }

} 