// Constructor Pattern Implementation using prototype
'use strict';

// create a Task class with prototype implementation

let BetterTask = function (name){

    this.name = name;
    this.status = false;

};

// Add methods as prototype to task, so that all objects of task can link to these method without seperate copy for each object

BetterTask.prototype.complete = function(){
    this.status = true;
    return ('Completing Better task -' + this.name);

};

BetterTask.prototype.save = function(){

    return('Saving better task - '+ this.name);

};


module.exports = BetterTask;

