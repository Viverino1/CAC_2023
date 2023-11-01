import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "../../utils/Data";

Chart.register(CategoryScale);


const chartData = {
  labels: ['Red', 'Orange', 'Blue'],
  // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
  datasets: [
      {
        label: 'Popularity of colours',
        data: [55, 23, 96],
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



import { Line } from "react-chartjs-2";
import { PlusLg } from "react-bootstrap-icons";
function FinancePage() {
  return (
    <div className = "">
      <h1 className = "center p-1 text-3xl color-">Finance Manager</h1>
      <div className = "p-4 h-full w-full">


    <div className = "flex space-x-4">
    <div className="w-full h-fit card center overflow-clip">
    <div className="chart-container w-full">
    <h2 style={{ textAlign: "center" }}>Money Spent</h2>
    <Line
      data={chartData}
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
      data={chartData}
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
      data={chartData}
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
        <h2 className="text-3xl center">$140</h2>
      </div>
    </div>

  <div className="w-full h-fit card center overflow-clip">
    <div className="chart-container w-full">
    <h2 style={{ textAlign: "center" }}>Projected Money Raised in 1 Month: </h2>
        <h2 className="text-3xl center">$160</h2>
    </div>
  </div>

  <div className="w-full h-fit card center overflow-clip">
    <div className="chart-container w-full">
    <h2 style={{ textAlign: "center" }}>Projected Profit in 1 Month: </h2>
        <h2 className="text-3xl center">$20</h2>
    </div>
  </div>

    </div>

    <div className="chart-container w-full py-5">
    <h2 style={{ textAlign: "center" }}>Amount of Money Left in Your Budget for the Month: </h2>
        <h2 className="text-3xl center">$100</h2>
    </div>

<div className = "py-16">
      <div className="flex">
      <button className = "button-primary center"><PlusLg size={30}/><p>Input Finance</p></button>
    <div className = "px-96">
    <div className = "px-96">
    <div className = "px-80">
    <button className = "button-secondary center"><PlusLg size={30}/><p>Set Budget</p></button>
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
