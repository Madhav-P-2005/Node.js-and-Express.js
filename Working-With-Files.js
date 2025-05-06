// Importing the built-in 'fs' (File System) module in Node.js

const fs = require("fs");


// ------------------------------
// Example 1 :-  Synchronous File Writing
// ------------------------------


// fs.writeFileSync() writes data to a file **synchronously**.

// This means the execution of the program **stops** until the file is written.

console.log("Starting");

fs.writeFileSync("File1.txt", "This is written using writeFileSync.");


// The line below will run **after** the file is fully written.
console.log("Synchronous write completed.");


/*

Output :- 

Starting
Synchronous write completed.
Ending the script.

*/


// ------------------------------

// Example 2 :-  Asynchronous File Writing => Use fs.writeFile (async) for any real-world application, especially web servers or APIs, to avoid blocking the event loop.

// ------------------------------


// fs.writeFile() :- writes data to a file **asynchronously**.

// This means the program will **not wait** for the file to be written,

// and will continue executing the next lines of code immediately.

console.log("Starting Asynchronous write...");


fs.writeFile("File2.txt", "This is written using writeFile (async).", () => {

  // This callback function runs once the file has been successfully created/written.
  console.log("Asynchronous write completed.");


  // Reading a File 
  fs.readFile("File2.txt" , (error , data) =>{
    console.log(error, data.toString());
  })

});


console.log("Ending the script.");



fs.appendFile("File2.txt" , "\n Appended this text " , (e , d) =>{
    console.log(d)
})



/*

Output :-  Only data :- 

Starting Asynchronous write...
Ending the script.
Asynchronous write completed.
null <Buffer 54 68 69 73 20 69 73 20 77 72 69 74 74 65 6e 20 75 73 69 6e 67 20 77 72 69 74 65 46 69 6c 65 20 28 61 73 79 6e 63 29 2e>


After data.tostring() :- 

Starting Asynchronous write...
Ending the script.
Asynchronous write completed.
null This is written using writeFile (async).



Starting Asynchronous write...
Ending the script.
Asynchronous write completed.
undefined
null This is written using writeFile (async). Appended this text

*/