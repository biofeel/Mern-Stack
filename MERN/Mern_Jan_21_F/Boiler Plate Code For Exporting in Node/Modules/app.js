
//save our exports in a variable:
const { greet, add } = require("./my_module");
greet();
add(5, 7);

//both import methods code blocks import functions

//destructuring:
const myCustomModule = require("./my_module");
myCustomModule.greet();
myCustomModule.add(5, 7);