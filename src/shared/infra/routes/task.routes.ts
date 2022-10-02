import { Router } from 'express';
import { ITasksController } from '../../../modules/tasks/interfaces';

export class TasksRouter {
  public router = Router();

  constructor(private readonly controller: ITasksController) {
    this.init();
  }

  public init(): void {
    this.router.post('/', this.controller.create);

    this.router.get('/', this.controller.read);

    this.router.get('/board/:boardId', this.controller.readFromBoard);

    this.router.patch('/:id', this.controller.update);

    this.router.patch('/:id/members', this.controller.updateMembers);

    this.router.patch('/:id/tags', this.controller.updateTags);

    this.router.delete('/:id', this.controller.delete);
  }
}
