export default function DashboardPage(){
  return(
    <div className="p-4 space-y-4">
      <div className="text-5xl font-bold text-primary">Business Tool Name</div>
      <div className="w-full h-full space-y-4 lg:flex lg:space-y-0 lg:space-x-4">
        <div className="card w-full h-64">
          <h2 className="">This Week's Profit</h2>
          <h1 className="font-bold text-3xl">$3,247</h1>

        </div>
        <div className="card w-full h-64"></div>
        <div className="card w-full h-64"></div>
      </div>
    </div>
  )
}