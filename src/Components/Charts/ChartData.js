import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

//  import { faker } from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const ChartData = ({ array = [], currency, days,Type }) => {
  



 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const price = [50, 55, 45, 1, 54, 6, 654, 8, 1, 85, 48, 4, 84];
const data = {
  labels,
  datasets: [
    {
      label: "Data One",
      data: price,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

return <Line options={options} data={data} />;
};

// export default function ChartData() {
//   return <Line options={options} data={data} />;
// }


export default ChartData;