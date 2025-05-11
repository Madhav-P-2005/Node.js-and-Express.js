/**

🔧 Node.js Core HTTP Server - REST API Example

Demonstrates how to create a basic REST API using Node.js built-in http module

without any external frameworks. This file handles basic CRUD operations

(GET, POST, PUT) on a hardcoded list of student data.

❗ Still to be implemented :-  DELETE, PATCH, etc.

🔗 Base URL :-  http://127.0.0.1:4000/Student_Data

*/



const http = require("http");

const port = 4000;

const hostname = "127.0.0.1";

const Student_Data = [
  { id: 1, firstname: "Madhav", lastname: "P", age: 19 },
  { id: 2, firstname: "Jyothi", lastname: "More", age: 19 },
  { id: 3, firstname: "Gungun", lastname: "Parlecha", age: 19 },
  { id: 4, firstname: "Sonny", lastname: "Dayal", age: 25 },
  { id: 5, firstname: "Karan", lastname: "kosh", age: 40 },
  { id: 6, firstname: "Arjun", lastname: "thakur", age: 100 },
];

http
  .createServer((req, res) => {
    const { method, url } = req;

    if (url === "/Student_Data") {
      if (method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const Converted_Data = JSON.stringify(Student_Data);
        res.write(Converted_Data);
        res.end();
      } else if (method === "POST") {
        let body = "";

        req.on("data", (chunk) => {
          body += chunk;
        });

        req.on("end", () => {
          try {
            const parsed = JSON.parse(body);
            Student_Data.push({
              id: Student_Data.length + 1, // Add an ID for the new student
              firstname: parsed.firstname,
              lastname: parsed.lastname,
              age: parsed.age,
            });

            res.writeHead(201, { "Content-Type": "application/json" });
            res.write(JSON.stringify({ message: "New student inserted!" }));
            res.end();
          } catch (error) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.write(
              JSON.stringify({ message: "❌ Invalid JSON in request body." })
            );
            res.end();
          }
        });
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.write(
          JSON.stringify({ message: "⚠️ Method not allowed for this URL." })
        );
        res.end();
      }
    } else if (url.startsWith("/Student_Data/") && method === "PUT") {
      const extract = url.split("/");
      const Converted_id = Number(extract[2]);

      let content = "";

      req.on("data", (chunk) => {
        content += chunk;
      });

      req.on("end", () => {
        try {
          const newData = JSON.parse(content);
          const index = Student_Data.findIndex(
            (student) => student.id === Converted_id
          );

          if (index !== -1) {
            newData.id = Converted_id;
            Student_Data[index] = newData;

            res.writeHead(200, { "Content-Type": "application/json" });
            res.write(
              JSON.stringify({
                message: "✅ Successfully updated student data!",
              })
            );
          } else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.write(JSON.stringify({ message: "❌ Student not found." }));
          }
        } catch (error) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.write(
            JSON.stringify({ message: "❌ Invalid JSON in request body." })
          );
        }
        res.end();
      });
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ message: "⚠️ Endpoint not found." }));
      res.end();
    }
  })
  .listen(port, () => {
    console.log(`Server is running on port http://${hostname}:${port}`);
  });
