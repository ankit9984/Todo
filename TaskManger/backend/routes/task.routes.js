import express from 'express';
import { createTask, deleteTask, getAllTask, updateTask } from '../controller/task.controller.js';

const router = express.Router();

router.post('/', createTask);
router.get('/', getAllTask);
router.put('/update/:id', updateTask);
router.delete('/delete/:id', deleteTask);

export default router;