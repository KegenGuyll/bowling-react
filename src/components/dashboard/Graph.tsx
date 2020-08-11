import React from 'react';
import Chart from 'react-apexcharts';

const Graph = () => {
  const options = {
    options: {
      // chart: {
      //   id: 'Bowling Scores',
      //   toolbar: {
      //     show: false,
      //   },
      //   title: {
      //     text: 'Bowling Scores',
      //     align: 'left',
      //     margin: 10,
      //     offsetX: 0,
      //     offsetY: 0,
      //     floating: false,
      //     style: {
      //       fontSize: '16px',
      //       color: '#fff',
      //     },
      //   },
      // },
      chart: {
        id: 'basic-bar',
        toolbar: {
          show: false,
        },
      },
      //   dataLabels: {
      //     enabled: false,
      //   },
      //   grid: {
      //     row: {
      //       colors: ['#2a2a2c'],
      //     },
      //     column: {
      //       colors: ['#2a2a2c'],
      //     },
      //   },
      //   colors: ['#0190fb'],
      //   xaxis: {
      //     labels: {
      //       show: false,
      //       style: {
      //         colors: '#fff',
      //         fontSize: '14px',
      //         fontFamily: 'sans-serif',
      //       },
      //     },
      //   },
      //   yaxis: {
      //     labels: {
      //       show: true,
      //       style: {
      //         color: '#fff',
      //         fontSize: '14px',
      //         fontFamily: 'sans-serif',
      //       },
      //     },
      //   },
      // },
    },
  };

  const series = [
    {
      data: [
        {
          x: '7/28/2020',
          y: 76,
        },
        {
          x: '7/29/2020',
          y: 78,
        },
        {
          x: '7/29/2020',
          y: 5,
        },
      ],
    },
  ];

  return <Chart height='400px' options={options} series={series} type='area' />;
};

export default Graph;
