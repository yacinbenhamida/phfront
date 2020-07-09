import { User } from './user.model';
import { Task } from './task.model';

export interface Comment{
    id : number
    content : string
    emitter : User
    targetTask : Task
    createdAt : Date
    updatedAt : Date
}