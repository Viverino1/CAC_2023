import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "../../utils/Data";

Chart.register(CategoryScale);

const spentData = {
  labels: ['Jan', 'Feb', 'Mar'],
  // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
  datasets: [
      {
        label: 'Money Spent',
        data: [100, 56, 23],
        // you can set indiviual colors for each bar
        backgroundColor: [
          'rgba(255, 255, 0, 1)',
          'rgba(255, 0, 255, 1)',
          'rgba(255, 0, 0, 1)'
        ],
        borderWidth: 4,
      }
  ]
}

const raisedData = {
  labels: ['Jan', 'Feb', 'Mar'],
  // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
  datasets: [
      {
        label: 'Money Raised',
        data: [10, 43, 14],
        // you can set indiviual colors for each bar
        backgroundColor: [
          'rgba(255, 255, 0, 1)',
          'rgba(255, 0, 255, 1)',
          'rgba(255, 0, 0, 1)'
        ],
        borderWidth: 4,
      }
  ]
}

const profitData = {
  labels: ['Jan', 'Feb', 'Mar'],
  // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
  datasets: [
      {
        label: 'Overall Profit',
        data: [10-100, 43-56, 14-23],
        // you can set indiviual colors for each bar
        backgroundColor: [
          'rgba(255, 255, 0, 1)',
          'rgba(255, 0, 255, 1)',
          'rgba(255, 0, 0, 1)'
        ],
        borderWidth: 4,
      }
  ]
}
//const [isProduct, setIsProduct] = useState(false);

  //const {isLoading, data: products} = useQuery("products", getProducts);

  //if(isLoading || !products){
    //return <div>Loading</div>
  //}


import { Line } from "react-chartjs-2";
import { PlusLg, X } from "react-bootstrap-icons";
function FinancePage() {
  const [isInput, setIsInput] = useState(false);
  const [isInputs, setIsInputs] = useState(false);

  return (

    <div className = "w-full h-full">
      <div className={`absolute top-0 left-0 w-full h-full bg-tertiary/50 backdrop-blur-sm transition center ${isInput? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className="flex-col space-y-2 card-secondary">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Add Input</h1>
            <button onClick={() => setIsInput(false)} className="center text-accent bg-transparent round transition hover:bg-primary hover:text-background"><X size={35}/></button>
          </div>
          <div className="flex space-x-4">
            <input type="text" placeholder="Money Gained" className="card"/>
            <input type="text" placeholder="Date" className="card"/>
          </div>
          <button className="button-primary">Save</button>
        </div>
      </div>
      <div className={`absolute top-0 left-0 w-full h-full bg-tertiary/50 backdrop-blur-sm transition center ${isInputs? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className="flex-col space-y-2 card-secondary">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Add Input</h1>
            <button onClick={() => setIsInputs(false)} className="center text-accent bg-transparent round transition hover:bg-primary hover:text-background"><X size={35}/></button>
          </div>
          <div className="flex space-x-4">
            <input type="text" placeholder="Set Budget for the Month" className="card"/>
            <input type="text" placeholder="Month" className="card"/>
          </div>
          <button className="button-primary">Save</button>
        </div>
      </div>
      <h1 className="text-5xl mt-4 font-bold text-primary w-full text-center">Finance Manager</h1>
      <div className = "p-4 h-full w-full">


    <div className = "flex space-x-4">
    <div className="w-full h-fit card center overflow-clip">
    <div className="chart-container w-full">
    <h2 style={{ textAlign: "center" }}>Money Spent</h2>
    <Line
      data={spentData}
      options={{
        plugins: {
          title: {
            display: false
            //text: "hello"
          },
          legend: {
            display: false
          }
        }
      }}
    />
    </div>
  </div>

  <div className="w-full h-fit card center overflow-clip">
    <div className="chart-container w-full">
    <h2 style={{ textAlign: "center" }}>Money Raised</h2>
    <Line
      data={raisedData}
      options={{
        plugins: {
          title: {
            display: false
          },
          legend: {
            display: false
          }
        }
      }}
    />
    </div>
  </div>

  <div className="w-full h-fit card center overflow-clip">
    <div className="chart-container w-full">
    <h2 style={{ textAlign: "center" }}>Overall Profit</h2>
    <Line
      data={profitData}
      options={{
        plugins: {
          title: {
            display: false
          },
          legend: {
            display: false
          }
        }
      }}
    />
    </div>
  </div>
    </div>

    <div className = "py-3 flex space-x-4 w-full">

      <div className="w-full h-fit card center overflow-clip">
        <div className="chart-container w-full">
        <h2 style={{ textAlign: "center" }}>Projected Money Spent in 1 Month: </h2>
        <h2 className="text-3xl center">$-17.33</h2>
        <h2 className = "text-2xl center">Conf. Level: 99.32%</h2>
      </div>
    </div>

  <div className="w-full h-fit card center overflow-clip">
    <div className="chart-container w-full">
    <h2 style={{ textAlign: "center" }}>Projected Money Raised in 1 Month: </h2>
        <h2 className="text-3xl center">$26.33</h2>
        <h2 className = "text-2xl center">Conf. Level: 1.233%</h2>
    </div>
  </div>

  <div className="w-full h-fit card center overflow-clip">
    <div className="chart-container w-full">
    <h2 style={{ textAlign: "center" }}>Projected Profit in 1 Month: </h2>
        <h2 className="text-3xl center">$43.66</h2>
        <h2 className = "text-2xl center">Conf. Level: 78.69%</h2>
    </div>
  </div>

    </div>

    <div className="chart-container w-full py-5">
    <h2 style={{ textAlign: "center" }}>Amount of Money Left in Your Budget for the Month: </h2>
        <h2 className="text-3xl center">$77</h2>
    </div>

<div className = "py-16">
      <div className="flex">
      <button onClick={() => setIsInput(true)} className="button-primary flex space-x-2">
            <PlusLg size={50}/>
            <p>New Input</p>
          </button>
    <div className = "px-96">
    <div className = "px-96">
    <div className = "px-60">
    <button onClick={() => setIsInputs(true)} className="button-secondary flex space-x-2">
            <PlusLg size={50}/>
            <p>Set Budget</p>
          </button>
    </div>
    </div>
    </div>
    </div>
    </div>

</div>
    </div>
  );
}

export default FinancePage;
