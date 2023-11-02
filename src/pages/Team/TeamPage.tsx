import { PlusLg } from "react-bootstrap-icons"
import Task from "../../components/Task"
import { getInitials } from "../../utils/helpers"
import { useQuery } from "react-query"
import { getProducts } from "../../utils/Firebase/firebase"

const teamMembers: TeamMember[] = [
  {
    fName: "Vedanth",
    lName: "Chimakurthy",
    email: "example@outlook.com",
  },
  {
    fName: "John",
    lName: "Doe",
    email: "email@gmail.com",
  }
]

export const tasks: Task[] = [
  {
    startTime: 1698854411000,
    endTime: 1698894411000,
    status: "Unstarted",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet arcu maximus, lobortis lacus sed, dapibus quam.",
    title: "Example Task",
    highPriority: true,
    assignedTo: [
      {
        fName: "John",
        lName: "Doe",
        email: "email@gmail.com",
      }
    ],
    completionDate: 1698895411000
  },
  {
    startTime: 1698864411000,
    endTime: 1698895411000,
    status: "In Progress",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet arcu maximus, lobortis lacus sed, dapibus quam.",
    title: "Finish the Robot Side Panels",
    highPriority: true,
    assignedTo: [
      {
        fName: "Vedanth",
        lName: "Chimakurthy",
        email: "example@outlook.com",
      },
      {
        fName: "John",
        lName: "Doe",
        email: "email@gmail.com",
      }
    ],
    completionDate: 1698895411000
  },

  {
    startTime: 1698864411000,
    endTime: 1698895411000,
    status: "Completed",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet arcu maximus, lobortis lacus sed, dapibus quam.",
    title: "Finish the Robot Side Panels",
    highPriority: true,
    assignedTo: [
      {
        fName: "Vedanth",
        lName: "Chimakurthy",
        email: "example@outlook.com",
      },
      {
        fName: "John",
        lName: "Doe",
        email: "email@gmail.com",
      }
    ],
    completionDate: 1698895411000
  },
]

export default function TeamPage(){
  return(
    <div className="w-full h-full flex flex-col">
      <h1 className="text-5xl mt-4 font-bold text-primary w-full text-center">Team Management</h1>
      <div className="w-full h-full p-4 flex space-x-4">
        <div className="w-24 h-full card p-2 space-y-4">
          <h1 className="font-bold text-primary text-center ">Team Members</h1>
          <div className="center">
            <div className="peer w-16 font-bold text-3xl text-background center bg-primary aspect-square rounded-full"><PlusLg size={35}/></div>
          </div>
          {teamMembers.map((user) => (
            <div className="center" key={user.email}>
              <div className="peer w-16 font-bold text-3xl text-background center bg-primary aspect-square rounded-full">{getInitials(user.fName, user.lName)}</div>
              <Tooltip text={user.fName + " " + user.lName}/>
            </div>
          ))}
        </div>
          
        <div className="w-full h-full overflow-auto space-y-4">
          <Priority/>
          <Overdue/>
          <Upcoming/>
          <Completed/>
          <div className="h-12"></div>
        </div>
      </div>
    </div>
  )
}

function Priority(){
  return(
    <div className="w-full space-y-4">
      <div>
        <h1 className="text-2xl font-bold">Priority</h1>
        <div className="w-full h-0.5 bg-gradient-to-r from-accent"/>
      </div>
      {tasks.map((task, i) => (
        <Task key={i} task={task}/>
      ))}
    </div>
  )
}

function Overdue(){
  return(
    <div className="w-full space-y-4">
      <div>
        <h1 className="text-2xl font-bold">Overdue</h1>
        <div className="w-full h-0.5 bg-gradient-to-r from-accent"/>
      </div>
      {tasks.map((task, i) => (
        <Task key={i} task={task}/>
      ))}
    </div>
  )
}

function Upcoming(){
  return(
    <div className="w-full space-y-4">
      <div>
        <h1 className="text-2xl font-bold">Upcoming</h1>
        <div className="w-full h-0.5 bg-gradient-to-r from-accent"/>
      </div>
      {tasks.map((task, i) => (
        <Task key={i} task={task}/>
      ))}
    </div>
  )
}

function Completed(){
  return(
    <div className="w-full space-y-4">
      <div>
        <h1 className="text-2xl font-bold">Completed</h1>
        <div className="w-full h-0.5 bg-gradient-to-r from-accent"/>
      </div>
      {tasks.map((task, i) => (
        <Task key={i} task={task}/>
      ))}
    </div>
  )
}

function Tooltip(props: {text: string}){
  return(
    <span className="z-30 translate-x-2 absolute bg-tertiary border-2 border-secondary peer-hover:opacity-100 opacity-0 transition px-2 py-1 left-24 round scale-0 peer-hover:scale-100 whitespace-nowrap">
      {props.text}
    </span>
  )
}