// Simple decorator pattern without object inheritance

// Now without impacting the functionality of Task, if we need additional functionality via Urgent task in simpleset terms we can do like 

// import Task
var Task = require('./task');


let urgentTask = new Task({name:'my urgent task!'});
// now add some additional properties and methods to urgent task object 
urgentTask.priority = 2;
urgentTask.notify = function(){
    return('Notifying urgent task - '+ this.name + ' having priority as ' + this.priority);
}

module.exports = urgentTask;
