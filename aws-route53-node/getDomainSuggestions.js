var AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});

var route53domains = new AWS.Route53Domains({apiVersion: '2014-05-15'});

var params = {
  DomainName: 'siras.com', /* required */
  OnlyAvailable: true, /* required */
  SuggestionCount: 25 /* required */
};
route53domains.getDomainSuggestions(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
