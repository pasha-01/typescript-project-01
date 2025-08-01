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
export { fetchUsers, fetchTasks };
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        return [
            { id: 1, name: "Ali", email: "ali@example.com", },
            { id: 2, name: "Bilal", email: "bilal@example.com", },
            { id: 3, name: "Chand", email: "chand@example.com", }
        ];
    });
}
function fetchTasks() {
    return __awaiter(this, void 0, void 0, function* () {
        return [
            { id: 1, title: "Task 1", description: "Description 1", assignee: null, status: taskStatus.pending },
            { id: 2, title: "Task 2", description: "Description 2", assignee: null, status: taskStatus.inProgress },
            { id: 3, title: "Task 3", description: "Description 3", assignee: null, status: taskStatus.Completed },
            { id: 4, title: "Task 4", description: "Description 4", assignee: null, status: taskStatus.pending },
            { id: 5, title: "Task 5", description: "Description 5", assignee: null, status: taskStatus.inProgress }
        ];
    });
}
// console.log("Mock API initialized");
// console.log(fetchUsers);
// console.log(fetchTasks);
