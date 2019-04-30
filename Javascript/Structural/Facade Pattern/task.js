// Facade pattern implementation 

var Task = function(data){

    this.name = data.name;
    this.priority = data.priority;
    this.status = data.status || false;
    this.project = data.project;

};


module.exports = Task;

