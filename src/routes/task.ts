import express, { Router } from 'express';
import Usercontroller from '../controllers/UserController.ts';

const router: Router = express.Router();

router
    .get('/', Usercontroller.getTasks)

    .post('/', Usercontroller.newTask)

    .put('/:id', Usercontroller.putTask)

    .patch('/:id', Usercontroller.patchTask)

    .delete('/:id', Usercontroller.deleteTask)

export default router;