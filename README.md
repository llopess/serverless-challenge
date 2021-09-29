# serverless-challenge

## O problema

https://github.com/dornellas13/serverless-challenge

### Rodando o projeto

Será necessário ter a biblioteca [Serverless](https://www.serverless.com/) rodando em sua máquina, além de uma conta [AWS configurada](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-config)

Clonar o projeto e executar
```bash
cd serverless-challenge && cd user-service
sls deploy
```

Também é possível testar o projeto localmente optando por executar `sls offline` 


### Biblioteca para debugg local
https://www.npmjs.com/package/serverless-offline

### Alguns links consultados

https://www.serverless.com/blog/node-rest-api-with-serverless-lambda-and-dynamodb/ (Link principal)


https://learn.hashicorp.com/tutorials/terraform/lambda-api-gateway
https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.03.html#GettingStarted.NodeJs.03.03
https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html#API_UpdateItem_Examples