import { Routes, Route, useLocation } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import DashboardPage from "./pages/Dashboard/DashboardPage"
import FinancePage from "./pages/Finance/FinancePage"
import TeamPage from "./pages/Team/TeamPage"
import ProductPage from "./pages/Product/ProductPage"
import AuthPage from "./pages/Auth/AuthPage"
import {useAuthState} from "react-firebase-hooks/auth";
import { auth, getCurrentUser } from "./utils/Firebase/firebase"
import { useQuery } from "react-query"

export default function App(){
  const location = useLocation().pathname;

  const [user, isAuthLoading] = useAuthState(auth);
  const {isLoading: isCurrentUserLoading, data: currentUser} = useQuery('currentUser', getCurrentUser, {enabled: user? true : false});

  if(isCurrentUserLoading || isAuthLoading){
    return <div>Loading</div>
  }else if(!user){
    return(
      <Routes>
        <Route path="/*" element={<AuthPage/>}/>
      </Routes>
    )
  }

  return(
    <div className="flex h-screen w-full">
      <Sidebar/>
      <div className="h-screen bg-background fixed left-24 right-0 top-0 bottom-0">
        <Routes>
          <Route path="/dashboard" element={<DashboardPage/>}/>
          <Route path="/finance" element={<FinancePage/>}/>
          <Route path="/product" element={<ProductPage/>}/>
          <Route path="/team" element={<TeamPage/>}/>
          <Route path="/auth" element={<AuthPage/>}/>
        </Routes>
      </div>
    </div>
  )
}