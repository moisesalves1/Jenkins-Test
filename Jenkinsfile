pipeline {
    agent any

    stages {

        stage('Switching Git Branch for Build variable') {
            steps {
                def environment = "development"
                script {
                // Use Node.js and npm installed on the Jenkins agent
                    switch(GIT_BRANCH) {
                        case "master":
                            environment = "production"
                            break
                        case "staging":
                            environment = "staging"
                            break
                    }
                }
                echo environment
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
                bat 'npm run -- ng build --configuration=${environment}'
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