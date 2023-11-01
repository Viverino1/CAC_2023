import { Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import DashboardPage from "./pages/Dashboard/DashboardPage"
import FinancePage from "./pages/Finance/FinancePage"
import TeamPage from "./pages/Team/TeamPage"
import GrowthPage from "./pages/Growth/GrowthPage"

export default function App(){
  return(
    <div className="flex h-screen">
      <Sidebar/>
      <div className="w-full bg-background">
        <Routes>
          <Route path="/dashboard" element={<DashboardPage/>}/>
          <Route path="/finance" element={<FinancePage/>}/>
          <Route path="/growth" element={<GrowthPage/>}/>
          <Route path="/team" element={<TeamPage/>}/>
        </Routes>
      </div>
    </div>
  )
}