/*

💡) Node.js (Core) vs Express.js

 - Routing :- 
   • Node.js :-  Verbose routing logic
   • Express.js :-  Clean and readable

 - Request Parsing :-
   • Node.js :-  Manual request parsing
   • Express.js :-  Built-in parsing support

 - Middleware :- 
   • Node.js :-  No middleware by default
   • Express.js :-  Extensive middleware support

 - Scalability :- 
   • Node.js :-  Not scalable for large apps
   • Express.js :-  Scalable structure

*/

const express = require("express");

const app = express();

const port = 3000;


// 🔧 Middleware :-  Serving static files from 'public' folder
// Example :-  accessing http://localhost:3000/File3.txt will serve the static file
app.use(express.static("public"));


// 🏠 Root route
app.get("/", (req, res) => {
  res.send("<h1> Hello World ! </h1>");
});


// 📝 Static blog route
app.get("/blog", (req, res) => {
  res.send("<h1> This is a blog </h1>");
});



/*

 ❌ Not practical approach :- 

 Creating separate endpoints for each blog post (below) becomes hard to maintain:
 
 app.get("/blog/intro-to-js", ...);
 app.get("/blog/intro-to-js/contact", ...);

 ✅ Better approach :-  Use dynamic route parameters

*/



// 🌐 Route with dynamic parameter

// Example :-  //localhost:3000/blog/o?node=dark&regin=in
app.get("/blog/:first", (req, res) => {

    // console.log(req);
    /*
    Output :- 

    params: { first: 'o' },
    query: {},

    */


  console.log(params); //  e.g :-  params: { first: 'o' }
  console.log(query); //  e.g :-   query: { node: 'dark', regin: 'in' }

  res.send(`<h1> This is blog of ${params.first} </h1>`);
});



// 🌐 Route with two dynamic parameters
app.get("/blog/:first/:second", (req, res) => {
  res.send(
    <h1>
      This is blog of ${req.params.first} and ${req.params.second}
    </h1>
  ); // req.params is an object
});



// 🚀 Start Express server
app.listen(port, () => {
  console.log(`✅ Express App is running on port http://localhost:${port}`);
});