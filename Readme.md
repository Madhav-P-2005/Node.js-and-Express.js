## 🚀 Node.js And Express.js – A Complete Guide

This repository contains my learning progress while exploring **Node.js**. I’m documenting commands, concepts, and server logic that I’ve worked on step-by-step.

> ✅ Now extended with **Express.js** for scalable server-side applications.

---

### 📦 NPM Basics

| Command                              | Description                                    |
| ------------------------------------ | ---------------------------------------------- |
| npm --version                        | Check the installed version of npm             |
| npm init                             | Initialize a Node.js project (package.json)    |
| npm init -y                          | Quick init with default values                 |
| npm install slugify or npm i slugify | Install a single package                       |
| npm i express jsonwebtoken           | Install multiple packages                      |
| npm install --save-dev nodemon       | Install as a dev dependency                    |
| npx nodemon filename.js              | Run with auto-reload (without global install)  |
| node filename.js                     | Run directly with Node.js                      |
| npm install -g nodemon               | Install nodemon globally                       |
| nodemon filename.js                  | Run and watch file using global nodemon        |
| npm run dev                          | Run custom script (like dev) from package.json |

---

### 🧩 Scripts in package.json

```json
"scripts": {
  "start": "node Node.js",
  "dev": "nodemon Node.js"
}
```

Now you can run:

* `npm run dev` → for development server
* `npm start` → for production server

---

### 🧠 What is npx?

`npx` allows running binaries from `node_modules/.bin/` without installing them globally.
Example: `npx nodemon Node.js`

---

### 🔁 NVM – Node Version Manager

Use NVM to manage multiple Node.js versions:

```bash
nvm install 16
nvm use 16
```

---

### 🛠 Useful npm Commands

* `npm config get prefix` → Shows global npm path
* `npm cache clean --force` → Clean npm cache
* Set global path: e.g., `E:\Users\MADHAV\npm` (add to environment variables)

---

### 🌐 HTTP Methods & Status Codes

| Method | Purpose        |
| ------ | -------------- |
| GET    | Retrieve data  |
| POST   | Send data      |
| PUT    | Full update    |
| PATCH  | Partial update |
| DELETE | Delete data    |

📚 [HTTP Status Codes – MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

---

### ⚙️ Node.js Server Logic (Basic)

Server processes data between **frontend** and **database** but does **not store** it permanently.

Run commands:

```bash
node server.js
npm start
npm run dev
```

Add custom script in `package.json`:

```json
"scripts": {
  "Madhav": "node nodeServer.js"
}
```

Run it with:

```bash
npm run Madhav
```

Stop the server with `Ctrl + C`.

---

### 🔄 Why Use Nodemon?

Auto-reloads the server on changes.

1. Install: `npm i nodemon`
2. Script: `"dev": "nodemon server.js"`
3. Run: `npm run dev`

---

### 🌐 Explore npm Packages

Visit: [https://www.npmjs.com](https://www.npmjs.com)

---

### 📁 Project Transfer Tip

If you share/clone the project:

* Delete `node_modules/` and `package-lock.json`
* Run `npm install` to regenerate them

---

### 🧵 Network Tools

* `netstat -ano` → View available localhost ports

---

### 🧬 TCP vs UDP (Bonus Note)

| Protocol | Details                                                 |
| -------- | ------------------------------------------------------- |
| TCP      | Reliable, connection-based, slower, handshake mechanism |
| UDP      | Faster, connection-less, no delivery guarantee          |

---

## ⚡️ New: Express.js Integration

> Continuing from Node.js, now exploring **Express.js** — a lightweight, unopinionated framework for building robust APIs and web servers.

### 🔹 Express.js Highlights:

* Simplifies routing, request handling, and server logic
* Supports middleware for reusable logic (auth, validation, etc.)
* Easily integrates with MongoDB, JWT, templating engines, and more
* Clean URL-based routing for scalable REST APIs
* Modular structure using routers and controllers
* Custom error handling and response formatting

### ✅ In Progress:

* Creating RESTful APIs using Express
* Implementing middleware and modular route handling
* Exploring request-response lifecycle
* Handling CRUD operations
* Preparing for MongoDB integration & JWT-based authentication

---

> 🔄 *Stay tuned as I continue to build real-time projects and integrate Express.js fully with database and authentication systems.*

⭐ *If you find this repo useful or want to support my learning journey, drop a star and follow along!*