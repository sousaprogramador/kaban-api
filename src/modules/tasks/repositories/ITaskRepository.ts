import { ITask } from '../interfaces/ITask';

export interface ITasksRepository {
  readFromBoard: (boardId: string) => Promise<ITask[]>;
  updateMembers: (id: string, operation: '$addToSet' | '$pull', value: string) => Promise<ITask | null>;
  updateTags: (id: string, operation: '$addToSet' | '$pull', value: string) => Promise<ITask | null>;
}
