import { GraphUp } from "react-bootstrap-icons";
import { tasks } from "../Team/TeamPage";
import Task from "../../components/Task";
import { useQuery } from "react-query";
import { getProducts } from "../../utils/Firebase/firebase";

export default function DashboardPage(){
  const {isLoading, data: products} = useQuery("products", getProducts);
  if(isLoading)return <div>Loading</div>

  return(
    <div className="p-4 space-y-4">
      <div className="text-5xl font-bold text-primary">Business Tool Name</div>
      <div className="w-full h-full space-y-4 lg:flex lg:space-y-0 lg:space-x-4">
        <div className="overflow-scroll w-full h-full space-y-4">
          <div className="font-bold text-2xl">Upcoming Tasks</div>
          {tasks.map((task, i) => (
            <Task key={i} task={task}/>
          ))}
        </div>
        
        <div className="w-full space-y-4">
          <div className="card w-full h-64 center flex-col">
            <h2 className="">Lowest Stocked Product</h2>
            <h1 className="font-bold text-5xl">Blueberries</h1>
            <h2 className="">Restock</h2>
          </div>
          <div className="card w-full h-64 center flex-col">
            <h2 className="">Total Weekly Profit</h2>
            <h1 className="font-bold text-5xl">$287.32</h1>
          </div>
        </div>

      </div>
    </div>
  )
}