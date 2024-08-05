import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import { useSelector } from 'react-redux';

const CategoryWiseExpense = () => {
  const { categoryWiseExpense } = useSelector((state) => state.expenses);
  const [data, setData] = useState([['category', 'expenses']]);
  const options = {
    title: 'Category wise expenses',
    legend: 'none',
    pieSliceText: 'label',
  };
  useEffect(() => {
    let categoryData = [['category', 'expenses']];
    categoryWiseExpense.forEach((expense) => {
      categoryData.push([expense.category, expense.totalExpenses]);
    });
    setData(categoryData);
  }, [categoryWiseExpense]);
  return (
    <div>
      <Chart
        chartType='PieChart'
        width='100%'
        height='300px'
        data={data}
        options={options}
        loader={<div>Loading chart....</div>}
      />
    </div>
  );
};

export default CategoryWiseExpense;
