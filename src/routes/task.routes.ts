import { Router } from 'express';
import { TasksRepository } from '../modules/tasks/repositories/TaskRepository';
import { TaskController } from '../modules/tasks/useCases/taskControllers';

const tasksRoutes = Router();
const tasksRepository = new TasksRepository(); //
const taskController = new TaskController(tasksRepository);

tasksRoutes.get('/tasks', taskController.index);

export { tasksRoutes };
