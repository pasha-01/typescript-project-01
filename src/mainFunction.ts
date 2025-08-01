import { IUser, ITask, taskStatus } from './interfaces.js';
import { fetchUsers, fetchTasks } from './mockApi.js';
import { Task, User, TaskManager } from './classes.js';
import { paginate } from './generics.js';
export { main };


async function main ()
{    
    console.log("Task Manager Application Started");
    console.log("Fetching users and tasks...");

// Fetch users and tasks from the mock API
    const users: IUser[] = await fetchUsers();
    const tasks: ITask[] = await fetchTasks();
    console.log(fetchUsers);
    console.log(fetchTasks);
    
//Assign tasks to users using Task class
    users.forEach(user => {
        tasks.forEach(task => {
            if (!user.hasOwnProperty('tasks')) {
                (user as any).tasks = [];
            }

                (user as any).tasks.push(task.title);
        });
    });
// Use TaskManager and add tasks to it
        const taskManager = new TaskManager();
        tasks.forEach(task =>
     {
            taskManager.addTask(task);
        });
     console.log("Tasks added to TaskManager:", taskManager.tasks);
        
//filter tasks by status
        const pendingTasks = taskManager.getTasksByStatus(taskStatus.pending);
        const inProgress = taskManager.getTasksByStatus(taskStatus.inProgress);
        const completedTasks = taskManager.getTasksByStatus(taskStatus.Completed);

        console.log("Pending Tasks: " , pendingTasks);
        console.log("inProgress Tasks: " , inProgress);
        console.log("Completed Tasks: " , completedTasks);  

//filter tasks by user
        const getTaskByUser = (tasks: ITask[], userId: number): ITask[] => {
       return tasks.filter(task => task.assignee?.id === userId);}

// paginate and log first page
    const pageSize = 2;
    const pageNumber = 1;
   const userTasks = getTaskByUser(taskManager.tasks, users[0].id);
   const paginateTasks = paginate(userTasks, pageSize, pageNumber);
        
   console.log(`Page ${pageNumber} Tasks for ${users[0].name}:`, paginateTasks);
   const firstPage = paginate(tasks, 2, 1);
   console.log("First Page of Tasks:", firstPage);

}
main();