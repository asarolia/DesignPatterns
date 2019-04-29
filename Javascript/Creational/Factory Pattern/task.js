// task class used for saving and completing tasks
'use strict';

// import taskRepository

var taskRepo = require('./taskRepository');

// create a Task class with prototype implementation
// Pass JSON object for data 

let Task = function (data){

    this.name = data.name;
    this.status = false;

};

// Add methods as prototype to task, so that all objects of task can link to these method without seperate copy for each object

Task.prototype.complete = function(){
    this.status = true;
    return ('Completing task -' + this.name);

};

Task.prototype.save = function(){

    taskRepo.save(this);

    return('Task saved - '+ this.name);


};


module.exports = Task;

