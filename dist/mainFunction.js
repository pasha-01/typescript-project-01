var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { taskStatus } from './interfaces.js';
import { fetchUsers, fetchTasks } from './mockApi.js';
import { TaskManager } from './classes.js';
import { paginate } from './generics.js';
export { main };
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Task Manager Application Started");
        console.log("Fetching users and tasks...");
        // Fetch users and tasks from the mock API
        const users = yield fetchUsers();
        const tasks = yield fetchTasks();
        console.log(fetchUsers);
        console.log(fetchTasks);
        //Assign tasks to users using Task class
        users.forEach(user => {
            tasks.forEach(task => {
                if (!user.hasOwnProperty('tasks')) {
                    user.tasks = [];
                }
                user.tasks.push(task.title);
            });
        });
        // Use TaskManager and add tasks to it
        const taskManager = new TaskManager();
        tasks.forEach(task => {
            taskManager.addTask(task);
        });
        console.log("Tasks added to TaskManager:", taskManager.tasks);
        //filter tasks by status
        const pendingTasks = taskManager.getTasksByStatus(taskStatus.pending);
        const inProgress = taskManager.getTasksByStatus(taskStatus.inProgress);
        const completedTasks = taskManager.getTasksByStatus(taskStatus.Completed);
        console.log("Pending Tasks: ", pendingTasks);
        console.log("inProgress Tasks: ", inProgress);
        console.log("Completed Tasks: ", completedTasks);
        //filter tasks by user
        const getTaskByUser = (tasks, userId) => {
            return tasks.filter(task => { var _a; return ((_a = task.assignee) === null || _a === void 0 ? void 0 : _a.id) === userId; });
        };
        // paginate and log first page
        const pageSize = 2;
        const pageNumber = 1;
        const userTasks = getTaskByUser(taskManager.tasks, users[0].id);
        const paginateTasks = paginate(userTasks, pageSize, pageNumber);
        console.log(`Page ${pageNumber} Tasks for ${users[0].name}:`, paginateTasks);
        const firstPage = paginate(tasks, 2, 1);
        console.log("First Page of Tasks:", firstPage);
    });
}
main();
