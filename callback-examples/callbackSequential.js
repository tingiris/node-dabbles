//this example shows how to use callbacks for sequential execution

const fs = require('fs');

//task1 will call task2
function task1(callback) {
  fs.appendFile('example.txt', 'task1 done\n', (err) => {
  if (err) throw err;
    task2(callback);
  });
}

//when the script is run, this will start the sequence
task1(() => {
  fs.readFile('example.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });
});

//taks2 will call task3
function task2(callback) {
  fs.appendFile('example.txt', 'task2 done\n', (err) => {
    task3(callback);
  });
}

//task3 will call the callback to end the chain
function task3(callback) {
  fs.appendFile('example.txt', 'task3 done\n', (err) => {
    callback();
  });
}


