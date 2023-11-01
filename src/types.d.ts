type Status = "Unstarted" | "In Progress" | "Completed";

type Task = {
  startTime: number,
  endTime: number,
  status: Status,
  description: string,
  title: string,
  highPriority: boolean,
  assignedTo: TeamMember[],
  completionDate: number | null,
}

type Product = {
  name: string,
  stock: number,
  id: string,
}

type TeamMember = {
  fName: string,
  lName: string,
  email: string,
}

type User = {
  email: string,
  userName: string,
  uid: string,
  photoURL: string,
}