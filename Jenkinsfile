pipeline {

    agent any

    environment {
        IMAGE_NAME = "airline-frontend"
        CONTAINER_NAME = "frontend"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }


        stage('Build Image') {
            steps {
                sh '''
                docker build \
                -t ${IMAGE_NAME}:latest .
                '''
            }
        }


        stage('Deploy') {
            steps {
                sh '''
                docker stop ${CONTAINER_NAME} || true
                docker rm ${CONTAINER_NAME} || true

                docker run -d \
                  --name ${CONTAINER_NAME} \
                  --network web \
                  ${IMAGE_NAME}:latest
                '''
            }
        }
    }
}