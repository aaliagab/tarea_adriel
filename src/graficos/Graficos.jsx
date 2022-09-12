import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { marcas } from "./Colecciones.ts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export let ventas = [];
const labels = ["January", "February", "March", "April"];

function llenarVentas(marca){
    ventas = [0,0,0,0];
    for(let i = 0; i<marcas.length; i++){
        console.log(marcas[i].nombre);
        if(marcas[i].nombre == marca){
            ventas[0] = marcas[i].ventas[0].importe;
            ventas[1] = marcas[i].ventas[1].importe;
            ventas[2] = marcas[i].ventas[2].importe;
            ventas[3] = marcas[i].ventas[3].importe;
        }            
    }
}

const options = {
  fill: true,
  animations: false,
  scales: {
    y: {
      min: 0,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
};

export default function BarChart(props) {    
  const data = useMemo(function () {    
    llenarVentas(props.marca);
    return {
      datasets: [
        {
          label: "Mis datos",
          tension: 0.3,
          data: ventas,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.3)",
        },
      ],
      labels,
    };
  }, []);

  return (
    <div className="App">
      <Bar data={data} options={options} />
    </div>
  );
}
