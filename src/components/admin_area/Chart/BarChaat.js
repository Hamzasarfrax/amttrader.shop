import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [options, setOptions] = React.useState({
    chart: {
      type: 'bar',
      height: 150,
     
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: [""],
      
      
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1,
      colors: ['#D10024e6', '#AAE3E2', '#1F8A70']
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  });
  
  const [series, setSeries] = React.useState([
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }
  ]);

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height="150px" width="100%" />
    </div>
  );
}

export default ApexChart;
