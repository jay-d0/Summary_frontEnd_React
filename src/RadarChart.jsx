import React from "react";
import "chart.js/auto";
import { Radar } from "react-chartjs-2";

function RadarChart(props) {
    const data = {
        labels: [
          'Eating',
          'Drinking',
          'Sleeping',
          'Designing',
          'Coding',
        ],
        datasets: [{
          label: "Balance of Environments",
          data: [65, 59, 66, 22, 56],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
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