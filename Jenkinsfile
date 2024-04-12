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
            steps {
                // Build the Angular app
                bat "xcopy dist\\jenkins-test\\browser\\* C:\\inetpub\\wwwroot\\${GIT_BRANCH} /e /y"
            }
        }
    }

    post {
        always {
            script {
                    versionPackage = bat returnStdout: true, script: "@node -p \"require('./package.json').version\""
            }
        }
        success {
            echo "Job Succeeded!"
            emailext body: "Version released: ${versionPackage} on ${environment} environment", subject: "[Jenkins] ${env.JOB_NAME} - Build# ${env.BUILD_NUMBER} - ${env.BUILD_STATUS}", to: 'moises.alves@atp.com.br,cc:moisesalves1@gmail.com'
        }
        failure {
            echo "Job Failed!"
            emailext body: "Something is wrong with ${env.BUILD_URL}", subject: "[Jenkins] ${env.JOB_NAME} - Build# ${env.BUILD_NUMBER} - ${env.BUILD_STATUS}", to: 'moises.alves@atp.com.br'
        }
        cleanup {
            echo "Version: ${versionPackage}"
            echo "Environment: ${environment}"
        }
    }

} 