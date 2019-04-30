// Complex decorator pattern using prototype inheritance

// Now without imapcting the functionality of Task and Urgent Task, if we need to enhance behaviour of task object 
// then we can take advantage of prototype inheritance

// import Task
var Task = require('./task');

let impTask = function(data){

    Task.call(this,data);
    this.priority = data.priority;
    this.explain = function(){
        return(`${this.name} with priority of ${this.priority}!`);
    }
}
impTask.prototype = Object.create(Task.prototype);  // this will set prototype inheritance and inherit Task class properties & methods

// However, for impTask to maintain its own properties need to use defineProperty to set constructor attributes

Object.defineProperty(impTask.prototype,'constructor',{
    value: impTask,
    writable:true,
    enumerable:true,
    configurable:true

});

module.exports = impTask;