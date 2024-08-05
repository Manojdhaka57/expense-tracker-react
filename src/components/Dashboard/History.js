import React from 'react';
import styled from 'styled-components';
import find from 'lodash/find';
import { useSelector } from 'react-redux';
import {
  StyledExpenseIcon,
  StyledIncomeIcon,
  StyledRupeeIcon,
} from '../../styled/GlobalStyled';
import { getDataByYearAndMonth } from './utils';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 24px 24px 10px 24px;
  width: 100%;
  background-color: #3cbd7e;
  background-image: linear-gradient(
    to right,
    rgba(60, 189, 126, 0.9),
    rgba(60, 189, 126, 0.7),
    rgba(60, 189, 126, 0.7),
    rgba(60, 189, 126, 0.9)
  );
  border-radius: 10px;
`;

const StyledContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const StyledExpenseDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  color: white;
`;
const StyledMessageDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  text-transform: capitalize;
  &.above {
    color: #ff663a;
  }
  &.below {
    color: #14a800;
  }
`;
const History = () => {
  const { expensesSummary, monthWiseExpenses } = useSelector(
    (state) => state.expenses
  );
  const income = find(expensesSummary, ['_id', 'income'])?.totalExpenses || 0;
  const expenses =
    find(expensesSummary, ['_id', 'expense'])?.totalExpenses || 0;
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  let thisMonthExpenses =
    getDataByYearAndMonth(monthWiseExpenses, year, month + 1)?.totalExpense ||
    0;

  let lastMonthExpenses =
    getDataByYearAndMonth(
      monthWiseExpenses,
      month === 0 ? year - 1 : year,
      month === 0 ? 11 : month
    )?.totalExpense || 0;
  const getMessageForThisMonthExpense = () => {
    let message = '';
    if (!lastMonthExpenses) {
      message = '100% above last month';
      return (
        <StyledMessageDiv className='above'>
          {' '}
          <StyledExpenseIcon /> {message}
        </StyledMessageDiv>
      );
    } else if (lastMonthExpenses > thisMonthExpenses) {
      let lessPercent = Math.round(
        ((lastMonthExpenses - thisMonthExpenses) / lastMonthExpenses) * 100,
        2
      );
      message = `${lessPercent}% below last month`;
      return (
        <StyledMessageDiv className='below'>
          {' '}
          <StyledIncomeIcon /> {message}
        </StyledMessageDiv>
      );
    } else {
      let lessPercent = Math.round(
        ((thisMonthExpenses - lastMonthExpenses) / lastMonthExpenses) * 100,
        2
      );
      message = `${lessPercent}% above last month`;
      return (
        <StyledMessageDiv className='above'>
          {' '}
          <StyledExpenseIcon /> {message}
        </StyledMessageDiv>
      );
    }
  };
  return (
    <StyledWrapper>
      <StyledContentDiv>
        <StyledDiv>
          <StyledExpenseDiv>
            <StyledIncomeIcon /> Income
          </StyledExpenseDiv>
          <StyledExpenseDiv>
            <StyledRupeeIcon />
            {income}
          </StyledExpenseDiv>
        </StyledDiv>
        <StyledDiv>
          <StyledExpenseDiv>
            <StyledExpenseIcon /> Expenses
          </StyledExpenseDiv>
          <StyledExpenseDiv>
            <StyledRupeeIcon />
            {expenses}
          </StyledExpenseDiv>
        </StyledDiv>
      </StyledContentDiv>
      <StyledDiv>
        {Boolean(thisMonthExpenses) && getMessageForThisMonthExpense()}
      </StyledDiv>
    </StyledWrapper>
  );
};

export default History;
