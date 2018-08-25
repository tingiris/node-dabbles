const templateModule = require('./templateModule.js');

templateModule.getResult((err, result) => {

  if (err) console.log("some error");

  console.log(result);

});

var nameValue;

templateModule.sayHello(nameValue, (err, result) => {

  if (err) {
    console.log(err.message);
    return;
  }

  console.log(result);

});
