//b2fdbaa2-0c98-4ec9-b3bf-a7089b1a1a33

//returns the current status of an operation that is not completed
var AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});

var route53domains = new AWS.Route53Domains({apiVersion: '2014-05-15'});

var params = {
  OperationId: 'b2fdbaa2-0c98-4ec9-b3bf-a7089b1a1a33' /* required */
};
route53domains.getOperationDetail(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
