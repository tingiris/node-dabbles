var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
  //endpoint: "http://localhost:8000"
});

var dynamodb = new AWS.DynamoDB();

var params = {
  TableName: 'Movies' /* required */
};
dynamodb.deleteTable(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
