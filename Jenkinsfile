pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = 'registry-1.docker.io'
        DOCKER_USER = 'aminhedi'
        DOCKER_PASSWORD = credentials('MyDocker')
    }

    stages {
        stage('Build and Push Docker Image') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'DOCKER_PASSWORD', variable: 'DOCKER_PASSWORD')]) {
                        echo "Building and pushing Docker image..."
                        bat "echo \$DOCKER_PASSWORD | docker login -u \$DOCKER_USER --password-stdin \$DOCKER_REGISTRY"
                        bat "docker build -t your-image-name ."
                        bat "docker push your-image-name"
                    }
                }
            }
        }
    }
}
