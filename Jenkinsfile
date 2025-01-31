pipeline {
    agent any  // Run the pipeline on any available agent

    environment {
        NODE_VERSION = '16'
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Checkout the code from your Git repository and specify the main branch
                git branch: 'main', url: 'https://github.com/janahbeatriz/playwright-demo.git'
            }
        }

        stage('Set Up Node.js') {
            steps {
                // Set up Node.js with the specified version
                script {
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
