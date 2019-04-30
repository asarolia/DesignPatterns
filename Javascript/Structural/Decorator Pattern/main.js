// Decorator pattern implementation and usage

// import task file
var Task = require('./task');
var urgentTask = require('./SimpleDecorator');
var impTask = require('./Decorator');


// Check if tasks are fine 
let task1 = new Task({name:'Milk'});
console.log(task1.save());
console.log(task1.complete());

// Simple decorator usage 

console.log(urgentTask.notify());
console.log(urgentTask.save());
console.log(urgentTask.complete());

// Complex decorator using prototype inheritance 

let vimpTask = new impTask({name:'My Very Important Task',priority:1});

console.log(vimpTask.explain());
console.log(vimpTask.save());
console.log(vimpTask.complete());



