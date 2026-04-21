pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t gaming-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop gaming || true'
                sh 'docker rm gaming || true'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 5000:5000 --name gaming gaming-app'
            }
        }

        stage('Deploy Frontend') {
            steps {
                sh 'sudo cp -r frontend/* /usr/share/nginx/html/'
                sh 'sudo systemctl restart nginx'
            }
        }
    }
}
