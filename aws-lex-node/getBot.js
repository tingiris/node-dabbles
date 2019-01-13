var AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});
AWS.config.apiVersions = {
  lexmodelbuildingservice: '2017-04-19',
  // other service API versions
};

var lexmodelbuildingservice = new AWS.LexModelBuildingService();

var params = {
  name: 'SextantMarketing', /* required */
  versionOrAlias: '$LATEST' /* required */
};
lexmodelbuildingservice.getBot(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
