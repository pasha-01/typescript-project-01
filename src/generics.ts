import { IUser, ITask, taskStatus } from './interfaces.js';
import { fetchUsers, fetchTasks } from './mockApi.js';
import { Task, User, TaskManager } from './classes.js';
export { paginate };



function paginate<T,>(items :T[], pageSize : number, pageNumber :number ) :T[]{
    const start = (pageNumber - 1) * pageSize;
    return items.slice(start, start + pageSize);
}
