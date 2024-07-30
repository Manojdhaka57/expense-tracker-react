import React, { useEffect } from 'react';
import { StyledContentWrapper } from '../../styled/GlobalStyled';
import { useDispatch } from 'react-redux';
import {
  getAllExpenses,
  getExpensesSummary,
} from '../../actions/expenseActions';
import History from '../../components/Dashboard/History';
import RecentTransaction from '../../components/Dashboard/RecentTransaction';
import { emit } from '../../hooks/useEventBus';
import { EVENT_BUS } from '../../config/appConfig';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    emit({
      type: EVENT_BUS.UPDATE_HEADER_EVENT,
      title: 'Dashboard',
    });
    return () => {
      emit({
        type: EVENT_BUS.UPDATE_HEADER_EVENT,
        title: '',
      });
    };
  });
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
