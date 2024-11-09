pipeline{
    agent any

    triggers {
        pollSCM ('*/5 * * * *')
    }

    stages{
        stage("Update Database"){
            steps{
                sh './util.build.sh'
            }
        }
    }
    post{
        always{
            cleanWs()
        }
    }
}