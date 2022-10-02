import { IRepository } from '../../../shared/interfaces';
import { ITask } from '.';

export interface ITasksRepository extends IRepository<ITask> {
  readFromBoard: (boardId: string) => Promise<ITask[]>;
  updateMembers: (id: string, operation: '$addToSet' | '$pull', value: string) => Promise<ITask | null>;
  updateTags: (id: string, operation: '$addToSet' | '$pull', value: string) => Promise<ITask | null>;
}
