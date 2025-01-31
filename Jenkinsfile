pipeline {
    agent any  // Runs the pipeline on any available agent

    environment {
        NODE_VERSION = '16'
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Checkout the code from your Git repository
                git 'https://your-repository-url.git'  // Replace with your repo URL
            }
        }

        stage('Set Up Node.js') {
            steps {
                // Set up Node.js with the specified version
                script {
                    // Installing Node.js (ensure you have the NodeJS plugin installed in Jenkins)
                    def nodeTool = tool name: 'NodeJS', type: 'NodeJSInstallation'
                    env.PATH = "${nodeTool}/bin:${env.PATH}"
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                // Install Playwright and the required browsers
                sh 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Run Playwright tests
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            // Clean up after tests (optional)
            cleanWs()
        }

        success {
            echo 'Tests passed successfully!'
        }

        failure {
            echo 'Tests failed!'
        }
    }
}
