// Constructor Pattern Implementation using prototypes
'use strict';

// create a Task class without prototype implementation

let Task = function (name){

    this.name = name;
    this.status = false;

    // create a method for completing task
    this.complete = function(){
        return ('Completing task -' + this.name);
    };

    // create method for saving task
    this.save = function(){
        return('Saving task - '+ this.name);
    };

};

module.exports = Task;

