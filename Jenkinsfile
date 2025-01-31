pipeline {
    agent any
    tools { nodejs "NodeJS" }

    stages {
        stage('Install Dependencies') {
            steps { bat 'npm ci' }
        }

        stage('Install Playwright Browsers') {
            steps { bat 'npx playwright install --with-deps' }
        }

        stage('Run Playwright Tests') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'UNSTABLE') {
                    bat 'npx playwright test --reporter=html'
                }
            }
        }

        stage('Fix Report Paths') {
            steps {
                bat '''
                    cd playwright-report
                    powershell -Command "(Get-Content index.html) -replace 'href=\"/', 'href=\"./' | Set-Content index.html"
                    powershell -Command "(Get-Content index.html) -replace 'src=\"/', 'src=\"./' | Set-Content index.html"
                '''
            }
        }
    }

    post {
        always {
            publishHTML(
                target: [
                    allowMissing: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Report'
                ]
            )
            archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
            cleanWs()
        }
    }
}
