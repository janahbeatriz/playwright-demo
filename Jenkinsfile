pipeline {
    agent any  // Run the pipeline on any available agent

    environment {
        NODE_VERSION = '16'
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo "Checking out the code from the Git repository"
                git branch: 'main', url: 'https://github.com/janahbeatriz/playwright-demo.git'
            }
        }

        stage('Set Up Node.js') {
            steps {
                echo "Setting up Node.js"
                script {
                    def nodeTool = tool name: 'NodeJS', type: 'NodeJSInstallation'
                    env.PATH = "${nodeTool}/bin:${env.PATH}"
                }
            }
        }

        stage('Check Node.js Version') {
            steps {
                echo "Checking Node.js version"
                sh 'node -v'  // This will print the Node.js version in the console
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing npm dependencies"
                sh 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                echo "Installing Playwright browsers"
                sh 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                echo "Running Playwright tests"
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            echo "Cleaning workspace"
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
