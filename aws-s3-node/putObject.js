var AWS = require('aws-sdk');
var uuid = require('node-uuid');

// Create an S3 client
var s3 = new AWS.S3();

var params = {
    Body: new Buffer('./test.txt'), 
    Bucket: "dabblelab.com", 
    Key: "test.txt"
   };
   s3.putObject(params, function(err, data) {
     if (err){
         console.log(err, err.stack); // an error occurred
     }
     else {
        console.log(data);           // successful response
     }    
     /*
     data = {
      ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"", 
      VersionId: "Bvq0EDKxOcXLJXNo_Lkz37eM3R4pfzyQ"
     }
     */
   });