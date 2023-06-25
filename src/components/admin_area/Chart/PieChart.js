import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  const [series, setSeries] = useState([44, 55, 13, 33]);
  const [options, setOptions] = useState({
    chart: {
      width: 380,
      type: 'donut',
    },
    dataLabels: {
      enabled: false
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          show: false
        }
      }
    }],
    legend: {
      position: 'right',
      offsetY: 0,
      height: 230,
    }
  });

  const appendData = () => {
    const arr = series.slice();
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);

    setSeries(arr);
  }

  const removeData = () => {
    if (series.length === 1) return;

    const arr = series.slice();
    arr.pop();

    setSeries(arr);
  }

  const randomize = () => {
    setSeries(series.map(() => Math.floor(Math.random() * (100 - 1 + 1)) + 1));
  }

  const reset = () => {
    setSeries([44, 55, 13, 33]);
  }

  return (
    <div>
      <div className="chart-wrap">
        <div id="chart">
          <ReactApexChart options={options} series={series} type="donut" width="100%" height="100%"/>
        </div>
      </div>

     
    </div>
  );
};

export default PieChart;
