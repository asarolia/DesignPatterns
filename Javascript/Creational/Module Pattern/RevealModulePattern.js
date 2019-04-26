// Revealing Module pattern implementation in ES5

// Create and annonymous closure containing public and private methods  or properties 
// Javascript doesn't have private keywords for methods or properties
// Thus, to achieve encapsulation and maintain the state across objects closures are used
// As a convention, all private properties & methods are prefixed with underscore(_)


'use strict';

let myRevealModule = (function(){

    let _privateProperty = "I am private property not accessible directly without closure scope";

    let publicProperty = "Hello World , I am public property accessible outside directly";

    // private function to access private property

    function _privateMethod(){
        return _privateProperty;
    };

  // public method accessing private method

  function publicMethod(){
      return _privateMethod();
  }

  // Now reveal only the public property and methods 

  return {
      publicMethod : publicMethod,
      publicProperty : publicProperty

  };




})();

// test if working standalone
//console.log(myRevealModule.publicMethod());
//console.log(myRevealModule._privateProperty);
//console.log(myRevealModule.publicProperty);

// Now export as module 

module.exports = myRevealModule;
