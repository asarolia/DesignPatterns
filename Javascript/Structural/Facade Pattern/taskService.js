// Task Service object for some work 

var TaskService = function(Task){

    
    function explain(){

        return (`${Task.name} task with priority of ${Task.priority}, current status is ${Task.status} `);

    };

    function save (){
        return (` Task - ${Task.name} is saved, current status is ${Task.status}`);
    }
    
    function complete(){
        Task.status = true;
        return (`Task - ${Task.name} is completed, current status is ${Task.status}`)
    }
        
    return{
        explain: explain,
        complete : complete,
        save:save

    };

};

// facade wrapper
var facadeWrapper = function(Task){
    // receive the task object and then wraps all Task service work here expose simple wrapper function

    function process(){

        let taskService1 = new TaskService(Task);

        console.log(taskService1.explain(Task));
        console.log(taskService1.save(Task));
        console.log(taskService1.complete(Task));

    };

    // return wrapper function
    return {
        process : process
    };

};

module.exports = facadeWrapper;