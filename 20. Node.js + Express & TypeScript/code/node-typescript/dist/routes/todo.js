import express from 'express';
import { addTodo, getTodo, getTodos, removeTodo, updateTodo } from '../data.js'; // Import the addTodo function from data.js and not .ts
const router = express.Router();
// function handlePostTodos(req: Request, res: Response) {} // Here you have to use the Request and Response types from express to type the req and res parameters
router.post('/todos', (req, res) => {
    const text = req.body.text; // no error because req.body is typed as any because we could be getting any kind of request body. So be careful with that.
    const addedTodo = addTodo(text);
    res.json({ message: 'Todo added successfully', todo: addedTodo });
});
router.get('/todos', (req, res) => {
    const todos = getTodos();
    res.json({ message: 'Todos retrieved successfully', todo: todos });
});
router.get('/todos/:id', (req, res) => {
    const todo = getTodo(+req.params.id);
    res.json({ message: 'Todo retrieved successfully', todo: todo });
});
router.patch('/todos/:id', (req, res) => {
    const updatedTodo = updateTodo(+req.params.id, req.body.text);
    res.json({ message: 'Todo updated successfully', todo: updatedTodo });
});
router.delete('/todos/:id', (req, res) => {
    const todos = removeTodo(+req.params.id);
    res.json({ message: 'Todo deleted successfully', todo: todos });
});
export default router;
