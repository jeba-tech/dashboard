import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const ChartComponent = () => {
  const data = {
    labels: ['01', '02', '03', '04', '05', '06'],
    datasets: [
      {
        label: 'Last 6 days',
        data: [1.2, 1.5, 1.8, 1.6, 1.7, 2.1],
        borderColor: '#5A6ACF',
        backgroundColor: '#5A6ACF',
        fill: true,
      },
      {
        label: 'Last Week',
        data: [1.3, 1.4, 1.5, 1.5, 1.6, 1.7],
        borderColor: '#D8D9DB',
        backgroundColor: '#D8D9DB',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        align: 'start', 
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 10, 
          font: {
            size: 10, 
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          drawBorder: false,
        },
        ticks: {
          display: false, 
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ChartComponent;
