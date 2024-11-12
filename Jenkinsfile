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
        stage("deploy"){
            steps {
                sh './util/start-server.sh'
            }
        }
    }
    post{
        always{
            cleanWs()
        }
    }
}