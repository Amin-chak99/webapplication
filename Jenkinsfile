pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Ensure Docker is available in the PATH
                    def dockerHome = tool 'Docker'
                    env.PATH = "${dockerHome}\\:${env.PATH}"

                    // Change to the directory containing your docker-compose.yml file
                    dir('F:\\jenkins\\jenkins-home\\workspace\\webApp') {
                        // Bring up the Docker Compose services
                        bat 'docker-compose up -d'
                    }
                }
            }
        }

        stage('Push image to Docker Hub') {
            steps {
                script {
                    // Login to Docker Hub
                    withCredentials([usernamePassword(credentialsId: 'MyDocker', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                        // Use 'echo' to avoid Groovy String interpolation issue
                        bat """
                        echo %PASSWORD% | docker login -u %USERNAME% --password-stdin
                        """
                    }

                    // Tag and push the Docker image
                    bat "docker tag aminhediifrontimg aminhedi/aminhediifrontimg"
                    bat "docker push aminhedi/aminhediifrontimg"
                }
            }
        }
    }
}
