import React from 'react';
import Chart from 'react-apexcharts';

const Graph = () => {
  const options = {
    options: {
      chart: {
        id: 'Bowling Scores'
      },
      title: {
        text: 'Bowling Scores',
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: '16px',
          color: '#fff'
        }
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        row: {
          colors: ['#2a2a2c']
        },
        column: {
          colors: ['#2a2a2c']
        }
      },
      colors: ['#0190fb'],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        labels: {
          show: false,
          style: {
            colors: '#fff',
            fontSize: '14px',
            fontFamily: 'sans-serif'
          }
        }
      },
      yaxis: {
        labels: {
          show: false,
          style: {
            color: '#fff',
            fontSize: '14px',
            fontFamily: 'sans-serif'
          }
        }
      }
    }
  };

  const series = [
    {
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ];

  return <Chart options={options} series={series} type='area' />;
};

export default Graph;
