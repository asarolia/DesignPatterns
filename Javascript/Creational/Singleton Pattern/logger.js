// Singleton pattern implementation for logger 

var logger = (function(){

    // logger instance variable

    var loggerInstance;
    var count = 0;

    var createNewInstance = function(){

        count++;

        console.log("Logger Instance created :" + count);

        var logObject = Object.create(Object.prototype,{

            name:{
                value: "new log object",
                writable:true,
                enumerable:true,
                configurable:true},
                
            type:{
                value:"logger",
                writable:true,
                enumerable:true,
                configurable:true}
        
        });

        // move the newly created object into LoggerInstance

        loggerInstance = logObject;

        return loggerInstance;

    };


    var getInstance = function(){

        let logObject;

        // Check existence of logger Instance

        if(!loggerInstance){

            logObject = createNewInstance();

        }
        else
        {
            // instance already there so return the same 
            console.log("Reusing the logger Object");
            console.log(loggerInstance);
            logObject = loggerInstance;

        }

        return logObject;

    }

    return{
        getInstance : getInstance
    }

});

module.exports = new logger;  // or logger()