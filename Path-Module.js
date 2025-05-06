// Import built-in 'path' module to work with file and directory paths
import path from "path";

// Example path string (use double slashes `\\` or forward slashes `/` in Windows)
const myPath = "E:\\Node.js and Express.js\\File.txt";

// 1)  Get file extension (.txt)
console.log(path.extname(myPath));
// ➤ Output :-  .txt

// 2)  Get directory name of the path
console.log(path.dirname(myPath));
// ➤ Output :- E:\Node.js and Express.js

// 3)  Get base name (filename with extension)
console.log(path.basename(myPath));
// ➤ Output :- File.txt

// 4)  Join multiple segments into a valid path (handles OS-specific separators)
console.log(path.join("E:/", "Node.js and Express.js", "File1.txt"));
// ➤ Output :- E:\Node.js and Express.js\File1.txt



/* ========================
   ✨ ADVANCED & USEFUL ONES
   ======================== */

// 5)  Normalize path (fixes double slashes, dot segments, etc.)
console.log(
  path.normalize("E:\\Node.js\\..\\Node.js and Express.js\\File.txt")
);
// ➤ Output :- E:\Node.js and Express.js\File.txt

// 6)  Resolve path into absolute path (useful for routing, dynamic file loading)
console.log(path.resolve("folder", "subfolder", "index.js"));     
// ➤ Output :-  E:\Node.js and Express.js\folder\subfolder\index.js

// 7)  Check if a path is absolute
console.log(path.isAbsolute("/User/code"));       // ➤ true
console.log(path.isAbsolute("src/components"));   // ➤ false


/*

Note :- 

The reason path.isAbsolute("/User/code") returns true is because :- 

⭐) In POSIX systems (like Linux and macOS), a path starting with a forward slash / is considered an absolute path.

=> Absolute paths specify a location from the root directory.

=> So /User/code is a full path starting from the root /, not relative to any current working directory.


⭐) But on Windows, absolute paths look different — like :- 

console.log(path.isAbsolute("C:\\Users\\Admin"));   // true ✅
console.log(path.isAbsolute("Users\\Admin"));       // false ❌


💡) It will still return true, because Node.js internally uses POSIX-style logic unless you're using Windows-specific APIs like path.win32.isAbsolute().

*/


// 8)  Parse path into object (root, dir, base, name, ext)
console.log(path.parse(myPath));

/* 

➤ Output :-

{
  root: 'E:\\',
  dir: 'E:\\Node.js and Express.js',
  base: 'File.txt',
  ext: '.txt',
  name: 'File'
}

*/


// 9)  Format object into path (reverse of parse)

const parsed = {
  dir: "E:\\Node.js and Express.js",
  name: "File",
  ext: ".txt",
};
console.log(path.format(parsed));

// ➤ Output :- E:\Node.js and Express.js\File.txt



/*
📚 When These Are Useful in Full Stack Development:

✅ Routing files in Express
✅ Dynamically serving static files
✅ Creating file upload systems (like image/pdf uploads)
✅ Writing logs to local files
✅ Generating download links
✅ Ensuring compatibility across Windows/macOS/Linux

*/