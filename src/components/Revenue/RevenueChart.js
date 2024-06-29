import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const RevenueChart = () => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [
      {
        label: 'Last 6 days',
        data: [1.2, 1.5, 1.8, 1.6, 1.7, 2.1, 1.9, 1.5, 1.8, 2.0, 1.6, 1.7], 
        backgroundColor: '#5A6ACF',
        borderColor: '#5A6ACF',
        borderWidth: 1,
        barThickness: 8, 
      
      },
      {
        label: 'Last Week',
        data: [1.3, 1.4, 1.5, 1.5, 1.6, 1.7, 1.4, 1.6, 1.7, 1.9, 1.3, 1.5],
        backgroundColor: '#E6E8EC',
        borderColor: '#E6E8EC',
        borderWidth: 1,
        barThickness: 8, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
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

  return <Bar data={data} options={options} />;
};

export default RevenueChart;
