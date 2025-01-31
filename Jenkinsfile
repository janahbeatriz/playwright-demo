pipeline {
    agent any

    tools {
        // Match the name configured in Jenkins ("NodeJS")
        nodejs "NodeJS"
    }

    stages {
        // Remove redundant "Checkout Code" stage (SCM is auto-checked out)

        stage('Install Dependencies') {
            steps {
                sh 'npm ci' // Use "npm ci" for cleaner installs in CI
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps' // Install browsers with OS dependencies
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test --reporter=html' // Generate HTML reports
            }
        }
    }

    post {
        always {
            cleanWs()
            // Archive test results (optional)
            archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
        }
    }
}
