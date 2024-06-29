import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  ArcElement,
  CategoryScale,
  Tooltip,
  Legend
);

const OrderTimeChart = ({ data }) => {
  const chartData = {
    labels: ['Afternoon', 'Evening', 'Morning'],
    datasets: [
      {
        label: 'Order Time Distribution',
        data: data,
        backgroundColor: ['#5A6ACF', '#8593ED', '#C7CEFF'],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    cutout: '70%',
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div >
      <div className="chart-container" style={{marginLeft:'85px'}}>
      <Doughnut data={chartData} options={options} />
      </div>
     
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginLeft:'130px' }}>
        {chartData.labels.map((label, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '0 30px' }}>
            <div style={{
              width: '12px',
              height: '12px',
              backgroundColor: chartData.datasets[0].backgroundColor[index],
              marginRight: '5px',
              borderRadius: '50%',
            }}></div>
            <span style={{ fontSize: '10px' }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTimeChart;
