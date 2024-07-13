import React, { useEffect } from 'react';
import { StyledContentWrapper } from '../../styled/GlobalStyled';
import { useDispatch, useSelector } from 'react-redux';
import { getAllExpenses } from '../../actions/expenseActions';
import History from '../../components/Dashboard/History';
import RecentTransaction from '../../components/Dashboard/RecentTransaction';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { expenses } = useSelector((state) => state.expenses);
  console.log('@test', expenses);
  useEffect(() => {
    console.log('@test inside', expenses);
    dispatch(getAllExpenses({}));
  }, []);
  return (
    <StyledContentWrapper>
      <History />
      <RecentTransaction />
    </StyledContentWrapper>
  );
};

export default Dashboard;
