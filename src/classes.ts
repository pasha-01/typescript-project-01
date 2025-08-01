import { IUser, ITask, taskStatus } from './interfaces.js';
export { Task, User, TaskManager };


// defining class 1
class Task implements ITask 
{
    constructor(
            public id: number,
            public title: string,
            public description: string,
            public assignee: IUser,
            public status: taskStatus) 
            {
                this.id = id;
                this.title = title;
                this.description = description;
                this.assignee = assignee;
                this.status = status;
            }

    updateStatus = (newStatus : taskStatus) : taskStatus  =>
        { 
            this.status = newStatus;
            return this.status;
        } 
 
}
// defining class 2
class User implements IUser
{
     constructor (
        public id : number,
        public name: string,
        public email: string,)
    {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    tasks: string[]=[];

     assignTask = (task: ITask): ITask => {
        task.assignee = this;
        return task;
     }
}
// defining class 3
class TaskManager
{
    public tasks: ITask [] = [];
    //public users: IUser[] = [];

        addTask(task: ITask): void {
           this.tasks.push(task);
        }
    
        getTasksByStatus(status : taskStatus): ITask[] {
            return this.tasks.filter(task => task.status === status);
        }

        getTaskByUser(userId: number): ITask[] {
            return this.tasks.filter(task => task.assignee && task.assignee.id === userId);
        }

        findTaskById(id: string | number): ITask[] {

             return this.tasks.filter(task => task.id == id); 
        }

}
