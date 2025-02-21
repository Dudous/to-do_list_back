import { Request, Response} from 'express'
import Task  from '../models/task.ts';

class Usercontroller {

    static async getTasks(req: Request, res: Response) {
        try {
            const tasks = await Task.find();
            res.status(200).json(tasks);
        } 
        catch (error) {
            res.status(400).json({ message: 'tasks search error', error });
        }
    } 

    static async newTask (req: Request, res: Response) {
        const { title, content } = req.body
        
        try {
            const tasks = new Task({ title, content });
            await tasks.save();
            res.status(201).json(tasks);
        } 
        catch (error) {
            res.status(400).json({ message: 'create task error', error });
        }
    }

    static async putTask (req: Request, res: Response) {
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
    }

    static async patchTask(req: Request, res: Response) {

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
    }

    static async deleteTask (req: Request, res: Response) {
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
    }
}

export default Usercontroller;