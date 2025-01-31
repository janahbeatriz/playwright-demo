pipeline {
    agent any

    tools {
        nodejs "node-18"  // Requires NodeJS plugin and tool configured in Jenkins
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test --reporter=html,line'
            }
        }

        stage('Fix Report Paths') {
            steps {
                script {
                    // Fix absolute paths in HTML report for Jenkins compatibility
                    bat '''
                        cd playwright-report
                        powershell -Command "(Get-Content index.html) -replace 'href=\"/', 'href=\"./' | Set-Content index.html"
                        powershell -Command "(Get-Content index.html) -replace 'src=\"/', 'src=\"./' | Set-Content index.html"
                    '''
                }
            }
        }
    }

    post {
        always {
            // Publish HTML report properly
            publishHTML(
                target: [
                    allowMissing: true,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright HTML Report'
                ]
            )

            // Archive raw files as backup
            archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true

            cleanWs()
        }

        success {
            echo 'Build finished successfully - View report at: ${BUILD_URL}Playwright_20HTML_20Report/'
        }

        unstable {
            echo 'Some tests failed - View report at: ${BUILD_URL}Playwright_20HTML_20Report/'
        }
    }
}
