pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'docker-compose up -d'
            }
        }
        stage('push image to dockerhub ') {
            steps { 
                script {
                    withCredentials([usernamePassword(credentialsId: 'MyDocker', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                        
                        bat "echo $PASSWORD | docker login -u $USERNAME --password-stdin"
                        bat "docker tag aminhedifrontimg aminhedi/aminhedifrontimg"
                        
                        bat "docker push aminhedi/aminhedifrontimg"
                    }
                }
            }
        }
    }
}
