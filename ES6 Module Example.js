// 1st Way

import { someFunction } from "./Intro-To-Node.js";

someFunction();

/*


Output :-  Node gives :- 

SyntaxError: Cannot use import statement outside a module

Why ?  Because Node.js treats .js files as CommonJS by default unless you tell it otherwise.


Fix It in 2 Easy Options :- 

   Option 1 :-  Add "type": "module" to package.json.

   Option 2 :- Rename Files to .mjs => If you don’t want to change package.json, just rename your files :-   

                   a) Rename Node.js to Node.mjs

                   b) Rename ES6 Module Example.js to ES6 Module Example.mjs

*/

// 2nd Way

import obj from "./Intro-To-Node.js";

console.log(obj);

/* 

Output :-  { x: 5 , y: 7 }

*/

// 3rd Way

import obj2 from "./Intro-To-Node.js";

console.log(obj2);

/*

Output :-  { x: 5, y: 7 }

*/
