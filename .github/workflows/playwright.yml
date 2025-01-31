pipeline {
    agent any

    tools {
        nodejs "node-18"  // Ensure this matches the Node.js version configured in Jenkins
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'  // Install npm dependencies
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'  // Install Playwright browsers
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test --reporter=html'  // Run Playwright tests and generate HTML report
            }
        }

        stage('Check Report Directory') {
            steps {
                bat 'dir /s /b playwright-report'  // List all files in the playwright-report folder
            }
        }

        stage('Archive Test Results') {
            steps {
                // Archive the Playwright HTML report (even if it's ignored by git)
                archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            cleanWs()  // Clean up workspace
        }

        success {
            echo 'Tests passed successfully!'
        }

        failure {
            echo 'Tests failed!'
        }
    }
}
