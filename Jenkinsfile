pipeline {
    agent any  // Runs on any available agent

    tools {
        nodejs "node-18"  // Ensure this matches the Node.js version configured in Jenkins
    }

    stages {
        stage('Install Dependencies') {
            steps {
                // Use bat for Windows batch commands
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
                bat 'npx playwright test --reporter=html'  // Run Playwright tests
            }
        }
    }

    post {
        always {
            cleanWs()  // Clean up workspace
            archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
        }
    }
}
