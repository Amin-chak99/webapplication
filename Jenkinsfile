pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker-compose up -d'
            }
        }
        stage('push image to dockerhub ') {
            steps { 
                script {
                    withCredentials([usernamePassword(credentialsId: 'MyDocker', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                        
                        sh "echo $PASSWORD | docker login -u $USERNAME --password-stdin"
                        sh "docker tag aminhediifrontimg aminhedi/aminhediifrontimg"
                        
                        sh "docker push aminhedi/aminhediifrontimg"
                    }
                }
            }
        }
    }
}