import { getInitials } from "../utils/helpers";

export default function Task(props: {task: Task}){
  const {startTime, endTime, status, description, title, highPriority, assignedTo, completionDate} = props.task;
  const start = new Date(startTime);
  const end = new Date(endTime);

  return(
    <div className="w-full h-fit p-2 round bg-tertiary backdrop-blur relative overflow-clip">
      <div className="">
        <div className="h-8 w-full space-x-2 flex overflow-auto">
          {assignedTo.map((member) => (
            <div key={member.email} className="h-full aspect-square bg-primary rounded-full center font-bold text-background">{getInitials(member.fName, member.lName)}</div>
          ))}
          <div className={`h-full center round p-2 whitespace-nowrap font-bold space-x-1 bg-secondary`}> <span className={`w-3 aspect-square rounded-full ${status == "Completed"? "bg-green-500" : status == "In Progress"? "bg-yellow-500" : "bg-red-500"}`}></span><div>{status}</div></div>
        </div>
        <h1 className="mt-2 text-xl font-bold">{title}</h1>
        <div className="flex">
          <h2 className="round bg-secondary px-2 center w-fit">{start.toLocaleDateString()} @ {start.toLocaleTimeString()}</h2>
          <span className="center px-2">To</span>
          <h2 className="round bg-secondary px-2 center w-fit">{start.toLocaleDateString()} @ {start.toLocaleTimeString()}</h2>
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}