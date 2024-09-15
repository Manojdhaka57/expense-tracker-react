import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Chart from 'react-google-charts';

const DayWiseExpense = () => {
  const [data, setData] = useState([['Day', 'Expense']]);
  const { dayWiseExpense } = useSelector((state) => state.expenses);
  const options = {
    legend: 'none',
    title: 'day wise expenses',
  };

  useEffect(() => {
    let dayWiseData = [['Day', 'Expense']];
    dayWiseExpense.slice(0, 7).forEach((expense) => {
      dayWiseData.push([expense._id, expense.totalExpense]);
    });
    setData(dayWiseData);
  }, [dayWiseExpense]);
  console.log(`Expense:`, dayWiseExpense, data);

  return (
    dayWiseExpense?.length > 0 && (
      <div>
        <Chart
          chartType='ColumnChart'
          width='100%'
          height='300px'
          data={data}
          options={options}
          loader={<div>Loading chart....</div>}
        />
      </div>
    )
  );
};

export default DayWiseExpense;
