import React from 'react';
import Chart from 'react-google-charts';

const DonutChart = () => {
  return (
    <Chart
      chartType='PiceChart'
      width='100%'
      height='400px'
      data={data}
      options={options}
    />
  );
};

export default DonutChart;
