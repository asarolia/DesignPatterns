// taskRepository class used to process task data from DB

var repo = function(){

    // some dummy DB config 

    var _db = {};

    // Mock get function to get data from DB

    var get = function(id){

        console.log("Getting task "+id+ " from DB via Task Repository");

        return { name : "New task from db"};

    };

    // Mock save function to save data in DB

    var save = function(task){
        console.log("Task - "+ task.name  + " save into DB by Task Repository for user "+ task.user.name);
    }


    // Reval pattern to expose private function 

    return {
        get : get,
        save : save
    };

}

module.exports = repo();