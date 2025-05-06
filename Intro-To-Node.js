// Common Js (CJS) :-  Uses require() to import modules and module.exports to export them.


// 1st Way :- 

const http = require('node:http');

module.exports = {
  somefunction : () => console.log('hello')
};


// 2nd Way :- 

module.exports = {
  a : 1 ,
  b : 4
}


/*

// Use CommonJS (with .js and no "type": "module")

const { createServer } = require('node:http');

// OR

const http = require("http");



// 📌 Define server config
const hostname = '127.0.0.1'; // localhost
const port = 3000; // port number


//  Create the server

http.createServer((req , res) => {

}).listen(port , () =>{

})


// OR 


const server = createServer((req, res) => {

  
  // ──────────────────────────────────────────────────────
  // 1. Setting response status and headers

  // Method 1 :-  Using res.writeHead() to set both status and headers
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // 📝 ALTERNATIVE :- 
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/html');


  // Difference :- 
  // - writeHead(statusCode, headers) is a shortcut to set status + headers in one go
  // - setHeader(name, value) sets individual headers
  // - Both work in CommonJS & ES6 Modules

  
  
  // ──────────────────────────────────────────────────────
  // 2. Writing and ending the response


  // Method 1 :-  Use res.write() multiple times (like streaming content)
  res.write("<h1>Hello World!</h1>");
  res.write("<p>This is a simple HTTP server using Node.js.</p>");

  // res.write() lets you send chunks of data.
  // You MUST call res.end() to finish the response.



  // Finalize the response
  res.end("<p><strong>Goodbye from server!</strong></p>");


  // 📝 ALTERNATIVE :- 
  // If you just want to send everything at once:
  // res.end("<h1>Hello World!</h1><p>All in one go.</p>");

  // 💡 Note :-  Don't use res.write() after res.end() — it will throw an error.


});


//  Start the server
server.listen(port, hostname, () => {
  console.log(`🚀 Server running at http://${hostname}:${port}/`);
});


*/





// ES Modules (Mjs) or (ESM) (the modern JavaScript standard) :-  Uses import and export syntax, introduced in ECMAScript 2015 (ES6).




// 1st Way :- 

import {createServer} from 'node:http';

export const someFunction = () => console.log("Hello");



// 2nd Way :- 

/*

let obj;

export default obj = {

   x : 5,

   y: 7

}

*/



// 3rd Way  :- 

const obj2 = {
  x : 5,
  y : 7
}

export default obj2;






//  ES6 Modules version — make sure you use .mjs or set "type": "module" in package.json
import { createServer } from 'node:http';


// 📌 Define server config
const hostname = '127.0.0.1';     // localhost

const port = 3000;                // port number


//  Create the server

// createServer((req ,res) =>{

// }).listen(port ,() =>{ 

// })


const server = createServer((req, res) => {

  // ──────────────────────────────────────────────────────
  // 1. Setting response status and headers


  // Method 1 :-  Using res.writeHead() to set both status and headers

  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  // 📝 ALTERNATIVE :- 
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/html');


  // Difference :- 
  // - writeHead(statusCode, headers) is a shortcut to set status + headers in one go
  // - setHeader(name, value) sets individual headers
  // - Both work in CommonJS & ES6 Modules

  
  // ──────────────────────────────────────────────────────
  //  2. Writing and ending the response

  // Method 1 :-  Use res.write() multiple times (like streaming content)

  res.write("<h1>Hello World!</h1>");
  res.write("<p>This is a simple HTTP server using Node.js.</p>");

  // res.write() lets you send chunks of data.
  // You MUST call res.end() to finish the response.


  // Finalize the response
  res.end("<p><strong>Goodbye from server!</strong></p>");


  // 📝 ALTERNATIVE :- 

  // If you just want to send everything at once:
  // res.end("<h1>Hello World!</h1><p>All in one go.</p>");


  // 💡 Note :-  Don't use res.write() after res.end() — it will throw an error.
});


//  Start the server
server.listen(port, hostname, () => {
  console.log(`🚀 Server running at http://${hostname}:${port}/`);
});