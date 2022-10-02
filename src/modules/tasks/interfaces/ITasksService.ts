import { IService } from '../../../shared/interfaces';
import { ITask } from './ITask';

export interface ITasksService extends IService<ITask> {
  readFromBoard: (boardId: string) => Promise<ITask[]>;
  updateMembers: (id: string, operation: 1 | -1, value: string) => Promise<ITask | null>;
  updateTags: (id: string, operation: 1 | -1, value: string) => Promise<ITask | null>;
}
