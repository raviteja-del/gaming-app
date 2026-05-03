pipeline {
    agent any

    stages {

        stage('Pull Latest Code') {
            steps {
                git branch: 'main', url: 'https://github.com/raviteja-del/gaming-app.git'
            }
        }

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

        stage('Run New Container') {
            steps {
                sh 'docker run -d -p 5000:5000 --name gaming gaming-app'
            }
        }

        stage('Deploy Frontend') {
            steps {
                sh '''
                sudo rm -rf /usr/share/nginx/html/*
                sudo cp -r frontend/* /usr/share/nginx/html/
                sudo systemctl restart nginx
                '''
            }
        }
    }
}
