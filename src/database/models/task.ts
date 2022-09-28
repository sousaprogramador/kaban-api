import { Document, Schema, model, PaginateModel } from 'mongoose';
import paginate from 'mongoose-paginate-v2';

type TaskDocument = Document;

const taskSchema = new Schema(
  {
    boardId: { type: Number, required: true },
    status: { type: String, required: true }, // This represents the column ex: "PENDING" | "IN_PROGRESS" | "TESTING" |  "DONE", etc.
    title: { type: String, required: true },
    description: String,
    priority: { type: Number, required: true, min: 1, max: 5 },
    members: [String],
    tags: [String],
  },
  {
    timestamps: true,
    collection: 'tasks',
    versionKey: false,
  },
);

taskSchema.plugin(paginate);

export const taskModel = model<TaskDocument, PaginateModel<TaskDocument>>('Task', taskSchema, 'tasks');
