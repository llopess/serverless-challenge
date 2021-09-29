'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');

const { USER_TABLE } = process.env;

AWS.config.setPromisesDependency(require('bluebird'));

const dynamoDB = new AWS.DynamoDB.DocumentClient();

const setUserData = ({ fullName, age, jobPosition }) => ({
  TableName: USER_TABLE,
  Item: {
    id: uuid.v1(),
    fullName,
    age,
    jobPosition,
    createdAt: new Date().getTime(),
  },
});

const list = (event, ctx, callback) => {
  const params = {
    TableName: USER_TABLE,
    ProjectionExpression: 'id, fullName, jobPosition, age',
  };

  const onScan = (err, data) => {
    if (err) {
      console.log(
        'Scan failed to load data. Error JSON:',
        JSON.stringify(err, null, 2)
      );
      callback(err);
    } else {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({ users: data.Items }),
      });
    }
  };

  dynamoDB.scan(params, onScan);
};

const create = (event, ctx, callback) => {
  const reqBody = JSON.parse(event.body);

  const userData = setUserData(reqBody);

  dynamoDB.put(userData, (err, data) => {
    if (err) callback(err);
    else
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ message: 'User created successfully' }),
      });
  });
};

const update = (event, ctx, callback) => {
  // Teria MUITO que ter teste unitário

  const { pathParameters, body } = event;
  const reqBody = JSON.parse(body);

  if (reqBody?.fullName && reqBody?.jobPosition && reqBody?.age) {
    if (pathParameters?.id) {
      const params = {
        Key: { id: pathParameters.id },
        ExpressionAttributeValues: {
          ':name': reqBody?.fullName,
          ':job': reqBody?.jobPosition,
          ':age': reqBody?.age,
        },
        UpdateExpression:
          'set fullName = :name, jobPosition = :job, age = :age',
        ReturnValues: 'UPDATED_NEW',
        TableName: USER_TABLE,
      };

      dynamoDB.update(params, (err, data) => {
        if (err) console.log(err);
        else
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({
              message: `Id ${pathParameters.id} updated`,
            }),
          });
      });
    }
  } else {
    callback(null, { statusCode: 500, body: 'Missing parameter to update' });
  }
};

module.exports = {
  create,
  list,
  update,
};
