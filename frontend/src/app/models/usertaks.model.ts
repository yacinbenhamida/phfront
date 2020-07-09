import { User } from './user.model';
import { Task } from './task.model';

export interface UserTask{
    id:number,
    idDelegue :number,
    idTache : number,
    task_users : User[]
    task : Task
    createdAt: Date
}