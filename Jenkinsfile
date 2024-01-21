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
                        
                        bat "echo \$DOCKER_CREDENTIALS | docker login -u aminhedi --password-stdin"

/*                         bat "echo $PASSWORD | docker login -u $USERNAME --password-stdin"
 */                        bat "docker tag hediaminv1frontimg aminhediv1/hediaminv1frontimg"
                        
                        bat "docker push aminhediv1/hediaminv1frontimg"
                    }
                }
            }
        }
    }
}
