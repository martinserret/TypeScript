import { createServer } from 'node:http'; // You have to install the @types/node package to use Node.js types in TypeScript (npm install @types/node)
const server = createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    res.end('Hello World!');
});
server.listen(3000);
