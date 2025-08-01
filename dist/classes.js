export { Task, User, TaskManager };
// defining class 1
class Task {
    constructor(id, title, description, assignee, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.assignee = assignee;
        this.status = status;
        this.updateStatus = (newStatus) => {
            this.status = newStatus;
            return this.status;
        };
        this.id = id;
        this.title = title;
        this.description = description;
        this.assignee = assignee;
        this.status = status;
    }
}
// defining class 2
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.tasks = [];
        this.assignTask = (task) => {
            task.assignee = this;
            return task;
        };
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
// defining class 3
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    //public users: IUser[] = [];
    addTask(task) {
        // this.tasks.push(task);
    }
    getTasksByStatus(status) {
        return this.tasks;
    }
    getTaskByUser(userId) {
        return this.tasks.filter(task => task.assignee && task.assignee.id === userId);
    }
    findTaskById(id) {
        return this.tasks.filter(task => task.id == id);
    }
}
