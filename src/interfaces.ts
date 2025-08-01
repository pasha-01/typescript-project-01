// defining interfaces
interface IUser 
{
    id : number;
    name: string;
    email: string;
   // tasks : string[];
}
 interface ITask 
{
    id :number ;
    title : string;
    description: string;
    assignee : IUser | null;
    status : taskStatus;
}
// defining enum
 enum taskStatus 
{
    pending, 
    inProgress,
    Completed,
}

export { IUser, ITask, taskStatus };