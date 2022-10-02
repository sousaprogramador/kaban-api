import { Request, Response } from 'express';
import { ITasksRepository } from '../repositories/ITaskRepository';

class TaskController {
  constructor(private tasksRepository: ITasksRepository) {}

  async index(request: Request, response: Response): Promise<Response> {
    const { page, limit } = request.params;
    const task = await this.tasksRepository.read(1, 10);
    return response.json(task);
  }
}
export { TaskController };
