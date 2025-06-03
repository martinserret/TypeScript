import express from 'express';
import { addTodo } from '../data.js'; // Import the addTodo function from data.js and not .ts
const router = express.Router();
// function handlePostTodos(req: Request, res: Response) {} // Here you have to use the Request and Response types from express to type the req and res parameters
router.post('/todos', (req, res) => {
    const text = req.body.text; // no error because req.body is typed as any because we could be getting any kind of request body. So be careful with that.
    const addedTodo = addTodo(text);
    res.json({ message: 'Todo added successfully', todo: addedTodo });
});
export default router;
