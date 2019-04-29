// userRepository class used to process user data from DB

var userrepo = function(){

    // some dummy DB config 

    var _db = {};

    // Mock get function to get data from DB

    var get = function(id){

        console.log("Getting user "+id+ " from DB via User Repository");

        return { name : "Test User"};

    };

    // Mock save function to save data in DB

    var save = function(task){
        console.log("Task - "+ task.name  + " save into DB by user Repository");
    }


    // Reval pattern to expose private function 

    return {
        get : get,
        save : save
    };

}

module.exports = userrepo();