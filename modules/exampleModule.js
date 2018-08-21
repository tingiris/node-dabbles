//this is an example module 

module.exports = function exampleModule() {

  return new Promise(function (resolve, reject) {
    if (Math.random() > .5) {
      resolve("result1");
    } else {
      reject("fail1");
    }
  });

}