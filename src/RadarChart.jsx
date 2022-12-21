import React from "react";
import "chart.js/auto";
import { Radar } from "react-chartjs-2";

function RadarChart() {
    const data = {
        labels: [
          'Eating',
          'Drinking',
          'Sleeping',
          'Designing',
          'Coding',
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 66, 22, 56],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
          label: 'My Second Dataset',
          data: [55, 48, 40, 55, 42],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
      };
      const options = {
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 50,
                suggestedMax: 70
            }
        }
    };
    return <Radar data={data} options={options} />;
};

export default RadarChart;