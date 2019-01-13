var AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});
var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.credentials = credentials;

var route53domains = new AWS.Route53Domains({apiVersion: '2014-05-15'});

var params = {
  //Marker: 'STRING_VALUE',
  //MaxItems: 0
};
route53domains.listDomains(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
