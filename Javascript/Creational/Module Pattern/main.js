// module pattern usage

// import module pattern 
var myModule = require('./ModulePattern');

// import reveal module pattern
var myRevealModule = require('./RevealModulePattern');


// Now try to access both public, private methods and properties 

//public
console.log(myModule.publicMethod());
console.log(myModule.publicProperty);

//private
//console.log(myModule.privateMethod()); // gives error 
console.log(myModule._privateProperty);

//**********output */

//D:\github\DesignPatterns\Javascript\Creational\Module Pattern>node main.js
//I am private property not accessible directly without closure scope
//Hello World , I am public property accessible outside directly
//undefined

// Now access methods and properties via revealing module pattern
console.log(myRevealModule.publicMethod());
console.log(myRevealModule.publicProperty);
console.log(myRevealModule._privateProperty);

