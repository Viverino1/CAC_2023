import { useState } from "react";
import { PlusLg } from "react-bootstrap-icons"

export default function TeamPage(){
  const status: Status = "Unstarted";
  const task: Task = {
    Start: 1234,
    End: 123455,
    Title: "Program",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien ipsum, varius eget sollicitudin molestie, vehicula nec magna. Curabitur nec quam risus. Integer tincidunt elit in tortor aliquam, id egestas nulla dapibus. Donec urna massa, aliquet non malesuada quis, laoreet vitae nunc. Morbi eu ultrices nunc, ut cursus nibh. Morbi vel velit lacus. Donec eget ex porta, aliquet massa eget, ultricies eros. Integer vestibulum, massa placerat dignissim egestas, sem ex mollis purus, nec varius purus dui ac velit. Donec id nisl ligula. Pellentesque id lectus sed ante gravida eleifend id sit amet tellus. Vivamus id orci sollicitudin, consequat sapien ut, porta arcu. Mauris quis placerat tortor.",
  }
  const [popUp, setPopUp] = useState(false);

  return(
    <div className="flex bg-background w-full h-screen overflow-auto">
      <div className="w-fit h-full space-y-4 px-2 card overflow-scroll ml-8">
        <div className="text-text flex">Members</div>
        <div className="hover:border-2 hover:border-red-500">
          <img src="testPFP.jpg" className="w-16 aspect-square rounded-full"/>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-evenly w-full h-screen mx-8 lg:mx-0">
        <div className="w-full lg:w-1/3 h-full">
          <div className="title">PRIORITY:</div>
          <div className="relative card">
            <h1 className="text-text font-bold text-xs lg:text-3xl">{task.Title}</h1>
            <p className="lg:text-sm text-[8px] w-48 overflow-ellipsis">{task.Description}</p>
            <p className="absolute top-0 right-0 p-4 lg:text-sm text-[8px]">
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
              <img src="testPFP.jpg" className="w-4 md:w-6 lg:w-8 border-2 border-primary aspect-square rounded-full -translate-x-2 lg:-translate-x-3"/>
              <img src="testPFP.jpg" className="w-4 md:w-6 lg:w-8 border-2 border-primary aspect-square rounded-full -translate-x-4 lg:-translate-x-6"/>
              <img src="testPFP.jpg" className="w-4 md:w-6 lg:w-8 border-2 border-primary aspect-square rounded-full -translate-x-6 lg:-translate-x-9"/>
              <img src="testPFP.jpg" className="w-4 md:w-6 lg:w-8 border-2 border-primary aspect-square rounded-full -translate-x-8 lg:-translate-x-12"/>
            </p>
            <p className="absolute bottom-0 right-0 p-4 text-[10px] lg:text-sm">{status}</p>
          </div>

          <div className="mt-8 title">LATE:</div>
          <div className="relative card">
            <h1 className="text-text font-bold text-xs lg:text-3xl">{task.Title}</h1>
            <p className="lg:text-sm text-[8px]">{task.Description}</p>
            <p className="absolute top-0 right-0 p-4 lg:text-sm text-[8px]">
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
              <img src="testPFP.jpg" className="w-4 md:w-6 lg:w-8 border-2 border-primary aspect-square rounded-full -translate-x-2 lg:-translate-x-3"/>
              <img src="testPFP.jpg" className="w-4 md:w-6 lg:w-8 border-2 border-primary aspect-square rounded-full -translate-x-4 lg:-translate-x-6"/>
              <img src="testPFP.jpg" className="w-4 md:w-6 lg:w-8 border-2 border-primary aspect-square rounded-full -translate-x-6 lg:-translate-x-9"/>
              <img src="testPFP.jpg" className="w-4 md:w-6 lg:w-8 border-2 border-primary aspect-square rounded-full -translate-x-8 lg:-translate-x-12"/>
            </p>
            <p className="absolute bottom-0 right-0 p-4 text-[10px] lg:text-sm">{status}</p>
          </div>
        </div>

        <div className="w-full lg:w-1/3 h-full">
          <div className="title">UPCOMING:</div>
          <div className="relative card">
            <h1 className="text-text font-bold text-xs lg:text-3xl">{task.Title}</h1>
            <p className="lg:text-sm text-[8px]">{task.Description}</p>
            <p className="absolute top-0 right-0 p-4 lg:text-sm text-[8px]">
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
              <img src="testPFP.jpg" className="w-4 md:w-6 lg:w-8 border-2 border-primary aspect-square rounded-full -translate-x-2 lg:-translate-x-3"/>
              <img src="testPFP.jpg" className="w-4 md:w-6 lg:w-8 border-2 border-primary aspect-square rounded-full -translate-x-4 lg:-translate-x-6"/>
              <img src="testPFP.jpg" className="w-4 md:w-6 lg:w-8 border-2 border-primary aspect-square rounded-full -translate-x-6 lg:-translate-x-9"/>
              <img src="testPFP.jpg" className="w-4 md:w-6 lg:w-8 border-2 border-primary aspect-square rounded-full -translate-x-8 lg:-translate-x-12"/>
            </p>
            <p className="absolute bottom-0 right-0 p-4 text-[10px] lg:text-sm">{status}</p>
          </div>
      </div>
    </div>

      <div>
        <PlusLg size={60} className="text-white button-primary rounded absolute bottom-0 right-0 m-5"/>
      </div>

      <div className="absolute flex justify-center items-center w-full h-full bg-black text-white">
        <div className="w-1/2 h-1/3 bg-white">
          <div className="card-secondary">TITLE</div>
        </div>
      </div>
    </div>
  )
}