import { ReactElement } from "react";
import { CurrencyDollar, GraphUp, GraphUpArrow, HouseDoorFill, PersonBadgeFill } from "react-bootstrap-icons";
import { useQuery } from "react-query";
import { useNavigate, useLocation } from "react-router-dom";
import { queryClient } from "../main";

export default function Sidebar(){
  const user = queryClient.getQueryData('currentUser') as User;
  
  return(
    <div className="bg-tertiary w-24 p-4 space-y-4 fixed left-0 top-0 bottom-0 z-30">
      <Icon 
        icon={<img src={user.photoURL} className="w-10 rounded-full"/>}
        text={user.userName}
        link="auth"
      />

      <Icon 
        icon={<HouseDoorFill size={25}/>}
        text="Dashboard"
        link="dashboard"
      />

      <Icon 
        icon={<CurrencyDollar size={25}/>}
        text="Finance"
        link="finance"
      />

      <Icon 
        icon={<PersonBadgeFill size={25}/>}
        text="Team"
        link="team"
      />

      <Icon 
        icon={<GraphUpArrow size={25}/>}
        text="Product"
        link="product"
      />
    </div>
  )
}

function Icon(props: {icon: ReactElement, text: string, link: string}){
  const {icon, text, link} = props;
  const navigate = useNavigate();

  const isActive = useLocation().pathname.includes(link);
  
  return(
    <div className="center">
      <button
      onClick={() => {
        navigate(link);
      }}
      className={`outline-none text-primary peer w-full aspect-square center rounded-[32px] border-2 transition border-transparent ${isActive? "bg-secondary !text-accent round glow-primary" : "hover:round hover:border-secondary  hover:text-accent"}`}>
        {icon}
      </button>
      <Tooltip text={text}/>
    </div>
  )
}

function Tooltip(props: {text: string}){
  return(
    <span className="absolute bg-tertiary border-2 border-secondary peer-hover:opacity-100 opacity-0 transition px-2 py-1 left-24 round scale-0 peer-hover:scale-100 whitespace-nowrap">
      {props.text}
    </span>
  )
}