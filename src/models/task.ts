import mongoose, { Schema, Document } from 'mongoose';

interface ITask extends Document {
tittent: string;
}

const taskSchema: Schema = new Schema({
title: { type: String, required: false },
content: { type: String, required: true },
});

const Task = mongoose.model<ITask>('Task', taskSchema);

export default Task;