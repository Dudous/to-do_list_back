import express, { Router } from 'express';
import TaskController from '../controllers/TaskController.ts';

const router: Router = express.Router();

router
    .get('/', TaskController.getTasks)

    .post('/', TaskController.newTask)

    .put('/:id', TaskController.putTask)

    .patch('/:id', TaskController.patchTask)

    .delete('/:id', TaskController.deleteTask)

export default router;