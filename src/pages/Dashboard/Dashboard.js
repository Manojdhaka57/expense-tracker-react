import React, { useEffect } from 'react';
import { StyledContentWrapper } from '../../styled/GlobalStyled';
import { useDispatch } from 'react-redux';
import {
  getAllExpenses,
  getExpensesSummary,
} from '../../actions/expenseActions';
import History from '../../components/Dashboard/History';
import RecentTransaction from '../../components/Dashboard/RecentTransaction';

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllExpenses({}));
    dispatch(getExpensesSummary({}));
  }, []);
  return (
    <StyledContentWrapper>
      <History />
      <RecentTransaction />
    </StyledContentWrapper>
  );
};

export default Dashboard;
