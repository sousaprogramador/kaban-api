import { PaginateResult } from 'mongoose';
import { taskModel } from '../../../database';
import { ITasksRepository } from './ITaskRepository';

class TasksRepository implements ITasksRepository {
  public async read(page: number, limit: number): Promise<any> {
    const task = await taskModel.paginate({}, { page, limit, sort: { boardId: 1, status: 1, priority: -1 } });
    return 'task';
  }

  public async readFromBoard(boardId: string): Promise<any | undefined> {
    const task = await taskModel.find({ boardId }).sort({ status: 1, priority: -1 });
    return task;
  }

  public async updateMembers(id: string, operation: '$addToSet' | '$pull', value: string): Promise<any | undefined> {
    const task = await taskModel.findByIdAndUpdate(id, { [operation]: { members: value } }, { new: true });
    return task;
  }

  public async updateTags(id: string, operation: '$addToSet' | '$pull', value: string): Promise<any | undefined> {
    const task = await taskModel.findByIdAndUpdate(id, { [operation]: { tags: value } }, { new: true });
    return task;
  }
}

export { TasksRepository };
