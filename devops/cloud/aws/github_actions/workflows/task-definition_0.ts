module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "testfeature-5564",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-testprodmongo-5564-testfeature:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8017",
                    "protocol": "tcp",
                    "hostPort": "8017"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@testprodmongo.local:27017/testprodmongo_5564?authSource=admin"},{"name":"MONGO_DOMAIN","value":"testprodmongo.local"},{"name":"CAMUNDAPOD_URL","value":"http://testprodmongo.local:8080"},{"name":"SECURITYURL","value":"http://testprodmongo.local:8003"},{"name":"AUTHPROXYURL","value":"http://testprodmongo.local:8001"},{"name":"ADMINURL","value":"http://testprodmongo.local:8004"},{"name":"CAMUNDAURL","value":"http://testprodmongo.local:8002"},{"name":"GCAMURL","value":"http://testprodmongo.local:8007"},{"name":"APIGATEWAY","value":"http://testprodmongo.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "testprodmongo"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/testprodmongo",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
    ],
    "volumes": [
        {
        "fsxWindowsFileServerVolumeConfiguration": null,
        "efsVolumeConfiguration": {
            "transitEncryptionPort": null,
            "fileSystemId": `${process.env.EFS_ID}`,
            "authorizationConfig": {
            "iam": "DISABLED",
            "accessPointId": null
            },
            "transitEncryption": "DISABLED",
            "rootDirectory": "/"
        },
        "name": "testprodmongo",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "testprodmongo0",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
