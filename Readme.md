# 🚀 Node.js And Express.js -  A Complete Guide

This repository contains my learning progress while exploring **Node.js**. I’m documenting commands, concepts, and server logic that I’ve worked on step-by-step.

---

## 📦 NPM Basics

| Command                                  | Description                                        |
| ---------------------------------------- | -------------------------------------------------- |
| `npm --version`                          | Check the installed version of npm                 |
| `npm init`                               | Initialize a Node.js project (`package.json`)      |
| `npm init -y`                            | Quick init with default values                     |
| `npm install slugify` or `npm i slugify` | Install a single package                           |
| `npm i express jsonwebtoken`             | Install multiple packages                          |
| `npm install --save-dev nodemon`         | Install as a dev dependency                        |
| `npx nodemon filename.js`                | Run with auto-reload (without global install)      |
| `node filename.js`                       | Run directly with Node.js                          |
| `npm install -g nodemon`                 | Install nodemon globally                           |
| `nodemon filename.js`                    | Run and watch file using global nodemon            |
| `npm run dev`                            | Run custom script (like `dev`) from `package.json` |

---

## 🧩 Scripts in `package.json`

```json
"scripts": {
  "start": "node Node.js",
  "dev": "nodemon Node.js"
}
````

Now you can run:

* `npm run dev` → for development server
* `npm start` → for production server

---

## 🧠 What is `npx`?

`npx` allows running binaries from `node_modules/.bin/` without installing them globally.
Example: `npx nodemon Node.js` looks for `nodemon` in local dependencies and executes it.

---

## 🔁 NVM – Node Version Manager

Use NVM to manage multiple Node.js versions:

```bash
nvm install 16
nvm use 16
```

---

## 🛠 Useful npm Commands

* `npm config get prefix` → Shows global npm path
* `npm cache clean --force` → Clean npm cache
* Set global path: e.g., `E:\Users\MADHAV\npm` (add to environment variables)

---

## 🌐 HTTP Methods & Status Codes

HTTP methods you’ll use in APIs:

| Method   | Purpose        |
| -------- | -------------- |
| `GET`    | Retrieve data  |
| `POST`   | Send data      |
| `PUT`    | Full update    |
| `PATCH`  | Partial update |
| `DELETE` | Delete data    |

📚 [HTTP Status Codes – MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

---

## ⚙️ Node.js Server Logic (Basic)

Server’s main role is to **process data** between **frontend** and **database**. It does **not store data** permanently.

Common commands:

```bash
node server.js
npm start
npm run dev
```

Add custom script in package.json:

```json
"scripts": {
  "Madhav": "node nodeServer.js"
}
```

Run it with:

```bash
npm run Madhav
```

Stop the server with:

```bash
Ctrl + C
```

---

## 🔄 Why Use Nodemon?

Instead of restarting the server manually after every change:

1. Install it:

   ```bash
   npm i nodemon
   ```

2. Use it in scripts:

   ```json
   "dev": "nodemon server.js"
   ```

3. Run it:

   ```bash
   npm run dev
   ```

It will auto-restart your server when changes are detected.

---

## 🌐 Explore npm Packages

You can explore useful packages at [https://www.npmjs.com](https://www.npmjs.com)

---

## 📁 Project Transfer Tip

If you share or clone the project:

* Delete `node_modules/` and `package-lock.json` (to save space)
* Run `npm install` to regenerate them

---

## 🧵 Network Tools

* `netstat -ano` → See all available localhost ports

---

## 🧬 TCP vs UDP (Bonus Note)

* **TCP**: Reliable, connection-oriented, slower, continuous handshake.
* **UDP**: Fast, connection-less, used for chunks, no guarantee of delivery.

---

## 📚 Upcoming Learning

> I'm currently exploring **advanced Node.js server handling** like:

* User **Sign In / Sign Out**
* Handling **POST, DELETE, GET** in real APIs
* Error handling, routing, and more...

Next: I will learn **Express.js** and update this repo accordingly. Stay tuned!

---

> ⭐ *If this helps you or you want to support my learning, drop a star and follow my progress!*