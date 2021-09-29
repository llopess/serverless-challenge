# serverless-challenge

## O problema

https://github.com/dornellas13/serverless-challenge

## Executando o projeto

Será necessário ter a biblioteca [Serverless](https://www.serverless.com/) rodando em sua máquina, além de uma conta [AWS configurada](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-config)

Clonar o projeto e executar
```bash
cd serverless-challenge && cd user-service
sls deploy
```

Também é possível testar o projeto localmente optando por executar `sls offline` 


## Endpoints

* [Adicionar usuário](#adicionar-usuario)  
* [Listar usuários](#listar-usuarios)  
* [Atualizar usuário](#atualizar-usuario)  
* [Excluir usuário](#excluir-usuario)  

### Adicionar usuário
|Verbo|Request| 
|-|-|
|POST| `/dev/user`|

**Body**
```json
  {
    "fullName": "String",
    "jobPosition": "String",
    "age": "String"
  }
```

### Listar usuários
|Verbo|Request|
|-|-|
|GET| `/dev/user`|

**Response**
```json
  "users": ["Array"]
```

### Atualizar usuário
|Verbo|Request|Parâmetro|
|-|-|-|
|PUT| `/dev/user/{id}`|id, hash gerada automaticamente quando o usuário é adicionado|


**Body:** aceita os mesmos valores de [Adicionar usuário](#adicionar-usuario)  

### Excluir usuário
|Verbo|Request|Parâmetro|
|-|-|-|
|DELETE| `/dev/user/{id}`|id, hash gerada automaticamente quando o usuário é adicionado|


## Testes
Em razão de tempo e falta de experiência, nenhum tipo de teste automatizado foi aplicado nesse projeto.  
Porém as requsições se encontram na pasta [postman](./postman) desse repositório, com exemplos de dados de entrada.  
Peço atenção apenas para definir a url do Lambda na variável de ambiente, e selecionar um id nas requisições onde esse parâmetro é usado.  
## Biblioteca para debugg local
https://www.npmjs.com/package/serverless-offline

## Alguns links consultados

https://www.serverless.com/blog/node-rest-api-with-serverless-lambda-and-dynamodb/ (Link principal)


https://learn.hashicorp.com/tutorials/terraform/lambda-api-gateway
https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.03.html#GettingStarted.NodeJs.03.03
https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html#API_UpdateItem_Examples