var AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});

var lambda = new AWS.Lambda({apiVersion: '2015-03-31'});

/* This operation retrieves a Lambda functions */

 var params = {
  //Marker: "",
  //MaxItems: 123
 };
 lambda.listFunctions(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
   /*
   data = {
    Functions: [
    ],
    NextMarker: ""
   }
   */
 });
