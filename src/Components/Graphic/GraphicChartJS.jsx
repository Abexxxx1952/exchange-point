import React from "react";

import { Line } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.defaults.datasets.line.fill = true;
ChartJS.defaults.elements.line.fill = true;

const GraphicChartJS = ({ data }) => {
  const options = {
    tension: 0,
    responsive: true,
    layout: {
      padding: 10,
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: data.title,
      },
    },
  };

  return <Line options={options} data={data} />;
};

export { GraphicChartJS };
