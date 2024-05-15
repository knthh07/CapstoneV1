// GoogleChartComponent.jsx
import React from 'react';
import Chart from 'react-google-charts';

const GoogleChartComponent = ({ chartType, data, options }) => {
  return (
    <Chart
      width={'100%'}
      height={'100px'}
      chartType={chartType}
      loader={<div>Loading Chart...</div>}
      data={data}
      options={options}
    />
  );
};

export default GoogleChartComponent;
