// defining enum
var taskStatus;
(function (taskStatus) {
    taskStatus[taskStatus["pending"] = 0] = "pending";
    taskStatus[taskStatus["inProgress"] = 1] = "inProgress";
    taskStatus[taskStatus["Completed"] = 2] = "Completed";
})(taskStatus || (taskStatus = {}));
export { taskStatus };
