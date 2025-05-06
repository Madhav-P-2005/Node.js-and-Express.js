// const {somefunction} = require("./Node");


// somefunction()

/*

Output :- 

node "e:\Node.js and Express.js\Common.js Example.js"
hello

*/



// 2nd Way :- 

const a = require("./Node.js")

console.log(a , "\n" ,__dirname , "\n",  __filename);


/*

Output :- 

{ a: 1, b: 4 } 
 e:\Node.js and Express.js
 e:\Node.js and Express.js\Common.js Example.js

*/



(function (exports , require , module , __filename , __dirname)
{
  // Module code actually lives here .

  // Note :-  Node.js has a function where exports , require , module , filename and dirname can be used.

})