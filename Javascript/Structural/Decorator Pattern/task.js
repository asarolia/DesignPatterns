// Decorator Pattern implementation and usage
// create a Task class with prototype implementation
// Pass JSON object for data 

let Task = function (data){

    this.name = data.name;
    this.status = false;

};

// Add methods as prototype to task, so that all objects of task can link to these method without seperate copy of function
// for each object

Task.prototype.complete = function(){
    this.status = true;
    return ('Completing task -' + this.name);

};

Task.prototype.save = function(){

    return('Task saved - '+ this.name);


};

module.exports = Task;
