import express, { Request, Response, Router } from 'express';
import Task  from '../models/task.ts';

const router: Router = express.Router();

router
    .get('/', async (req: Request, res: Response) => {
        try {
            const tasks = await Task.find();
            res.status(200).json(tasks);
        } 
        catch (error) {
            res.status(400).json({ message: 'tasks search error', error });
        }
    })

    .post('/new', async (req: Request, res: Response) => {
        const { title, content } = req.body
        
        try {
            const tasks = new Task({ title, content });
            await tasks.save();
            res.status(201).json(tasks);
        } 
        catch (error) {
            res.status(400).json({ message: 'create task error', error });
        }
    })

    .put('/:id', async (req: Request, res: Response) => {
        const { id } = req.params;
        const { title, content } = req.body;

        try {
            const task = await Task.findByIdAndUpdate(id, { title, content }, { new: true });
            if (!task) {
                res.status(404).json({ message: 'task not found' });
            }
            res.status(200).json(task);
        } 
        catch (error) {
            res.status(400).json({ message: 'update task error', error });
        }
    })

    .patch('/:id', async (req: Request, res: Response) => {

        const { id } = req.params;
        const { content } = req.body;
        
        try {
            const task = await Task.findByIdAndUpdate(id, { content }, { new: true });
            if (!task) {
                res.status(404).json({ message: 'task not found' });
            }
            res.status(200).json(task);
        } 
        catch (error) {
            res.status(400).json({ message: 'update task error', error });
        }
    })

    .delete('/:id', async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const task = await Task.findByIdAndDelete(id);
            if (!task) {
                res.status(404).json({ message: 'task not found' });
            }
            res.status(200).json({ message: 'task deleted!' });
        } 
         catch (error) {
            res.status(400).json({ message: 'delete task error', error });
        }
    })

export default router;