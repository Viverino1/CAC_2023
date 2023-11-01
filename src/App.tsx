import { Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import DashboardPage from "./pages/Dashboard/DashboardPage"
import FinancePage from "./pages/Finance/FinancePage"
import TeamPage from "./pages/Team/TeamPage"
import AuthPage from "./pages/Auth/AuthPage"
import ProductPage from "./pages/Product/ProductPage"
export default function App(){
  return(
    <div className="flex h-screen w-full">
      <Sidebar/>
      <div className="bg-background fixed left-24 right-0 top-0 bottom-0 h-full">
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