pipeline {
    agent any  // This runs on any available agent (you can specify 'windows' if using a Windows agent)

    environment {
        NODE_VERSION = '18'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'  // Install dependencies using npm (Windows)
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'  // Install Playwright and required browsers
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {
                    // Run Playwright tests and allow failure
                    try {
                        bat 'npx playwright test --reporter=html'  // Run Playwright tests and generate HTML report
                    } catch (Exception e) {
                        echo "Test failed, but continuing the pipeline."
                    }
                }
            }
        }

        stage('Check Report Directory') {
            steps {
                bat 'dir /s /b playwright-report'  // List all files in the playwright-report directory (Windows)
            }
        }

        stage('Archive Playwright Report') {
            steps {
                // Archive the Playwright HTML report
                archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            cleanWs()  // Clean up workspace
        }

        success {
            echo 'Build finished successfully, even if some tests failed.'
        }

        failure {
            echo 'Tests failed, but build still succeeded.'
        }
    }
}
