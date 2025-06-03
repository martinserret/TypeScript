// CREATE A SERVER USING NODE.JS
// ----------------------------------
// import { createServer } from 'node:http'; // You have to install the @types/node package to use Node.js types in TypeScript (npm install @types/node)
// const server = createServer((req, res) => {
//   console.log(`Request received: ${req.method} ${req.url}`);
//   res.end('Hello World!');
// })
// server.listen(3000);
// CREATE A SERVER USING EXPRESS
// ----------------------------------
import express from 'express'; // Express is not a library that has Typescript support built in. You have to install the @types/express package to use Express types in TypeScript (npm install --save-dev @types/express)
import todoRoutes from './routes/todo.js'; // Import the todo routes
const app = express();
// app.get('/', (req, res) => {
//   console.log(`Request received: ${req.method} ${req.url}`);
//   res.json({ message: 'Hello World!' });
// })
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(todoRoutes);
app.listen(3000);
