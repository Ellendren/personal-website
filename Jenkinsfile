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
                sh './util/docker-deploy.sh'
            }
        }
    }
    post{
        always{
            cleanWs()
        }
    }
}