pipeline{
    agent any

    triggers {
        pollSCM ('*/5 * * * *')
    }

    stages{
        stage("Update Database"){
            steps{
                sh 'echo hello'
            }
        }
    }
    post{
        always{
            cleanWs()
        }
    }
}