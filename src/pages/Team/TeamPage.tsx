export default function TeamPage(){
  const status: Status = "Unstarted";

  return(
    <div className="flex bg-background w-full h-screen overflow-auto">
      <div className="w-fit h-full space-y-4 px-2 card overflow-scroll ml-2">
        <div className="text-text flex">Members</div>
        <img src="testPFP.jpg" className="w-16 aspect-square rounded-full"/>
        <img src="testPFP.jpg" className="w-16 aspect-square rounded-full"/>
        <img src="testPFP.jpg" className="w-16 aspect-square rounded-full"/>
        <img src="testPFP.jpg" className="w-16 aspect-square rounded-full"/>
        <img src="testPFP.jpg" className="w-16 aspect-square rounded-full"/>
        <img src="testPFP.jpg" className="w-16 aspect-square rounded-full"/>
        <img src="testPFP.jpg" className="w-16 aspect-square rounded-full"/>
        <img src="testPFP.jpg" className="w-16 aspect-square rounded-full"/>
        <img src="testPFP.jpg" className="w-16 aspect-square rounded-full"/>
        <img src="testPFP.jpg" className="w-16 aspect-square rounded-full"/>
      </div>

      <div className="flex justify-evenly w-full h-screen">
        <div className="w-1/3 h-full">
          <div className="title">PRIORITY:</div>
          <div className="relative card">
            <h1 className="text-text font-bold text-3xl">TITLE</h1>
            <p className="text-sm">DESCRIPTION</p>
            <p className="absolute top-0 right-0 p-4 text-sm">
              <div className="flex items-end flex-col">
                <p>
                  START: <input type="date" className="bg-inherit"></input>
                </p>
                <p>
                  END: <input type="date" className="bg-inherit"></input>
                </p>
              </div>
            </p>
            <p className="flex pt-4 text-sm">
              <img src="testPFP.jpg" className="w-4 md:w-6 lg:w-8 border-2 border-primary aspect-square rounded-full"/>
              <img src="testPFP.jpg" className="w-4 md:w-6 lg:w-8 border-2 border-primary aspect-square rounded-full -translate-x-3"/>
              <img src="testPFP.jpg" className="w-4 md:w-6 lg:w-8 border-2 border-primary aspect-square rounded-full -translate-x-6"/>
              <img src="testPFP.jpg" className="w-4 md:w-6 lg:w-8 border-2 border-primary aspect-square rounded-full -translate-x-9"/>
              <img src="testPFP.jpg" className="w-4 md:w-6 lg:w-8 border-2 border-primary aspect-square rounded-full -translate-x-12"/>
            </p>
            <p className="absolute bottom-0 right-0 p-4 text-sm">{status}</p>
          </div>

          <div className="mt-8 title">LATE:</div>
          <div className="relative card">
            <h1 className="text-text font-bold text-3xl">TITLE</h1>
            <p className="text-sm">DESCRIPTION</p>
            <p className="absolute top-0 right-0 p-4 text-sm">
            <div className="flex items-end flex-col">
                <p>
                  START: <input type="date" className="bg-inherit"></input>
                </p>
                <p>
                  END: <input type="date" className="bg-inherit"></input>
                </p>
              </div>
            </p>
            <p className="pt-4 text-sm">Assigned to</p>
            <p className="absolute bottom-0 right-0 p-4 text-sm">{status}</p>
          </div>
        </div>

        <div className="w-1/3 h-full">
          <div className="title">UPCOMING:</div>
          <div className="relative card">
            <h1 className="text-text font-bold text-3xl">TITLE</h1>
            <p className="text-sm">DESCRIPTION</p>
            <p className="absolute top-0 right-0 p-4 text-sm">
            <div className="flex items-end flex-col">
                <p>
                  START: <input type="date" className="bg-inherit"></input>
                </p>
                <p>
                  END: <input type="date" className="bg-inherit"></input>
                </p>
              </div>
            </p>
            <p className="pt-4 text-sm">Assigned to</p>
            <p className="absolute bottom-0 right-0 p-4 text-sm">{status}</p>
          </div>
      </div>
    </div>

    </div>
  )
}