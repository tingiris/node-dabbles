/* This example creates a Lambda function. */
var config = require('./config');
var fs = require('fs');

var AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});

//zip lamnda code
function packageLambda(callback) {
  //todo: add zip code
  var FolderZip = require('folder-zip');
  var options = {
  	excludeParentFolder: true, //Default : false. if true, the content will be zipped excluding parent folder.
  	//parentFolderName: 'v1.0' //if specified, the content will be zipped, within the 'v1.0' folder
  };

  //zip a folder and change folder destination name
  var zip = new FolderZip();
  zip.zipFolder(config.lambda.local_folder, options, function() {
  	zip.writeToFile(`${config.lambda.name}.zip`, () => {
      s3Upload(`${config.lambda.name}.zip`, callback);
    });
  });

}

//upload zip to s3
function s3Upload(zipPath, callback) {
  //todo: add upload code
  var object = fs.createReadStream(zipPath);

  var s3 = new AWS.S3({apiVersion: '2006-03-01'});
  var params = {
   Body: object,
   Bucket: config.s3_bucket,
   Key: `temp/${config.lambda.name}.zip`,
   ServerSideEncryption: "AES256",
   //Tagging: "key1=value1&key2=value2"
  };
  s3.putObject(params, (err, data) => {
    if (err) {
      console.log(err, err.stack);
      return callback(err);
    }

    //console.log(data);
    //return callback(null, data);
    /*
    data = {
     ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"",
     ServerSideEncryption: "AES256",
     VersionId: "Ri.vC6qVlA4dEnjgRV4ZHsHoFIjqEMNt"
    }
    */
    createLambda(callback);
  });

}

//create lamnda function
function createLambda(callback) {
  var lambda = new AWS.Lambda({apiVersion: '2015-03-31'});

  var params = {
    Code: {
      //ZipFile: 'code.zip'
      S3Bucket: config.s3_bucket,
      S3Key: `temp/${config.lambda.name}.zip`
    },
    Description: "",
    FunctionName: config.lambda.name,
    Handler: config.lambda.handler,
    MemorySize: config.lambda.memory,
    Publish: true,
    Role: config.lambda.role,
    Runtime: config.lambda.runtime,
    Timeout: config.lambda.timeout,
    VpcConfig: {}
  };

  lambda.createFunction(params, (err, data) => {
   if (err) {
     console.log(err.stack);
     return callback(err);
   }

   //console.log(data);
   return callback(null, data);
  });
}

//remove s3 object
//todo: this needs to be done

packageLambda((err, data) => {
  if (err) {
    console.log(err.stack);
  }

  console.log(`done.`);
});
