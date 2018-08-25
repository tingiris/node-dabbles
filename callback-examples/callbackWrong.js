//this example shows the wrong way to do sequential execution

const fs = require('fs');

//task1
fs.appendFile('example1.txt', 'task1 done\n');
console.log('task1 is done.');

//taks2
setTimeout(function() {
  fs.appendFile('example1.txt', 'task2 done\n');
  console.log('task2 is done.');
}, 3000);

//task3
fs.appendFile('example1.txt', 'task3 done\n');
console.log('task3 is done.');

//all done
console.log('everything is done.');
