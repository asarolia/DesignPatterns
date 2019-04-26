// Constructor pattern usage

// import custom class modules
var Task = require('./task');
var BetterTask = require('./betterTask');


// Create objects out of Task class

let task1 = new Task('Buy Grocery');
let task2 = new Task('Buy milk');
let task3 = new Task('Press clothes');

// complete & save

console.log(task1.complete());
console.log(task2.save());
console.log(task3.save());


// Create objects out of BetterTask class

let bettertask1 = new BetterTask('Buy Grocery');
let bettertask2 = new BetterTask('Buy milk');
let bettertask3 = new BetterTask('Press clothes');


// complete & save

console.log(bettertask1.save());
console.log(bettertask2.complete());
console.log(bettertask3.complete());


