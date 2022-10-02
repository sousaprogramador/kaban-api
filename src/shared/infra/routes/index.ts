import { Router } from 'express';
import { taskModel } from '../../database';
import { TasksRepository } from '../../../modules/tasks/repositories/TaskRepository';
import { TasksController } from '../../../modules/tasks/useCases/TaskControllers';
import { TasksService } from '../../../modules/tasks/useCases/TaskService';
import { TasksRouter } from './task.routes';

const tasksRepository = new TasksRepository(taskModel);

class RoutersFactory {
  public createTasksRouter(): Router {
    const tasksService = new TasksService(tasksRepository);
    const tasksController = new TasksController(tasksService);
    const tasksRouter = new TasksRouter(tasksController);
    return tasksRouter.router;
  }
}

export const routersFactory = new RoutersFactory();
