pipeline {
    agent any  // Run the pipeline on any available agent

    tools {
        nodejs "node-18" // Ensure this matches your Jenkins NodeJS tool name
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

        // Debug step to verify Node.js installation
        stage('Check Node.js Version') {
            steps {
                // Verify Node.js installation
                bat 'node -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                // Install Playwright and the required browsers
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Run Playwright tests
                bat 'npx playwright test'
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
