// Module pattern implementation in ES5

// Create and annonymous closure containing public and private methods  or properties 
// Javascript doesn't have private keywords for methods or properties
// Thus, to achieve encapsulation and maintain the state across objects closures are used
// As a convention, all private properties & methods are prefixed with underscore(_)


'use strict';

let myModule = (function(){

    let _privateProperty = "I am private property not accessible directly without closure scope";

    let publicProperty = "Hello World , I am public property accessible outside directly";

    // private function to access private property

    function _privateMethod(){
        return _privateProperty;
    };

    // return private method as closure via publicly accessible method 

    return {

        publicMethod :function(){

            let ptemp = _privateMethod();
            return ptemp;
           

        },
        publicProperty: publicProperty


    };

})();

// test if working standalone
//console.log(myModule.publicMethod());
//console.log(myModule._privateProperty);
//console.log(myModule.publicProperty);

// Now export as module 

module.exports = myModule;
