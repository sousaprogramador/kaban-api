import { Request, Response } from 'express';
import { Controller } from '../../../shared/abstraction/Controller';
import { ITask, ITasksController, ITasksService } from '../interfaces';

export class TasksController extends Controller<ITask> implements ITasksController {
  constructor(protected readonly service: ITasksService) {
    super(service);
    this.readFromBoard = this.readFromBoard.bind(this); // We also need to bind the method here so that we dont lose the context of the "this" keyword.
    this.updateMembers = this.updateMembers.bind(this);
    this.updateTags = this.updateTags.bind(this);
  }

  // Here we create a new method exclusive to the TasksController class that will be used to read tasks from a specific board.
  public async readFromBoard(req: Request, res: Response): Promise<Response> {
    const result = await this.service.readFromBoard(req.params.boardId);
    if (!result.length) {
      return res.status(404).json({
        message: 'No tasks were found for the boardId provided, please make sure that the board exist and have tasks',
      });
    }
    return res.status(200).json(result);
  }

  // Here we create a new method exclusive to the TasksController class that will be used to update the members array.
  public async updateMembers(req: Request, res: Response): Promise<Response> {
    const { operation, value } = req.body;
    const result = await this.service.updateMembers(req.params.id, operation, value);
    if (!result) return res.status(404).json({ message: 'Task not found' });
    return res.status(200).json(result);
  }

  // This is basically a copy of the updateMembers implementation.
  public async updateTags(req: Request, res: Response): Promise<Response> {
    const { operation, value } = req.body;
    const result = await this.service.updateTags(req.params.id, operation, value);
    if (!result) return res.status(404).json({ message: 'Task not found' });
    return res.status(200).json(result);
  }
}
