var config = require('./config');

var AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});

var lambda = new AWS.Lambda({apiVersion: '2015-03-31'});

/* This example adds a the Alexa Skills Kit as a trigger for a Lambda function. */

 var params = {
   FunctionName: config.lambda.name,
   Action: "lambda:InvokeFunction",
   Principal: "alexa-appkit.amazon.com",
   StatementId: "1234"
 };
 lambda.addPermission(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
 });
