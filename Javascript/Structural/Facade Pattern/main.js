// Facade Pattern usage and implementation

// import task
var Task = require('./task');
var facadeWrapper = require('./taskService');

// Facade pattern usage

let task1 = new Task({
    name:"Complete Design Patterns",
    priority:1,
    status:false,
    project:'tasklist'

});

// get facade object 
let facade = new facadeWrapper(task1);
facade.process();
