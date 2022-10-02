import { PaginateResult } from 'mongoose';
import { ITask } from '../interfaces/ITask';

export interface ITasksRepository {
  read(page: number, limit: number): Promise<PaginateResult<ITask>>;
  readFromBoard(boardId: string): Promise<ITask[] | undefined>;
  updateMembers(id: string, operation: '$addToSet' | '$pull', value: string): Promise<ITask | undefined>;
  updateTags(id: string, operation: '$addToSet' | '$pull', value: string): Promise<ITask | undefined>;
}
