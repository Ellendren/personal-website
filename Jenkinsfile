pipeline{
    agent any

    triggers {
        pollSCM ('*/5 * * * *')
    }

    stages{
        stage("build"){
            steps{
                sh './util/build.sh'
            }
        }
    }
    post{
        always{
            cleanWs()
        }
    }
}