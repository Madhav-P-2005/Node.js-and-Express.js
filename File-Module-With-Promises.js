// Promises :- 


import fs from "fs/promises"


let a = await fs.readFile("File1.txt");


// console.log(a.toString());


/*

Output :- 

This is written using writeFile (async).
 Appended this text

*/


// let b = await fs.writeFile("File2.txt" , "\n This is a Promise Example")

// OR 

let b = await fs.appendFile("File2.txt", "\n This is a Promise Example");


console.log(a.toString() , b)

/*

Output :- 

This is written using writeFileSync. 

*/