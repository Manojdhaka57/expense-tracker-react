import React from 'react';
import {
  StyledCard,
  StyledChip,
  StyledRupeeIcon,
  StyledTitle,
  cardAnimation,
} from '../../styled/GlobalStyled';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { format, isToday, isYesterday } from 'date-fns';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const StyledExpensesDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledExpenseDiv = styled(StyledCard)`
  display: flex;
  flex-direction: row;
  border-left: 6px solid rgba(255, 104, 57, 0.9);
  padding: 12px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  animation: ${cardAnimation} linear;
  animation-duration: 2s;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 70%;
  &.expense-amount {
    width: 30%;
    flex-direction: row;
    font-size: 16px;
    font-weight: bold;
    align-items: center;
    justify-content: flex-end;
    gap: 0;
    > svg {
      color: #ff6839;
    }
    color: #ff6839;
  }
`;

const StyledExpenseTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
  &.subTitle {
    font-size: 12px;
    font-weight: 400;
    color: #737373;
  }
`;
const RecentTransaction = () => {
  const { expenses } = useSelector((state) => state.expenses);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (!date) {
      return '';
    }
    if (isToday(date)) {
      // Format for today
      return format(date, 'h:mm aa');
    } else if (isYesterday(date)) {
      // Format for yesterday
      return 'Yesterday ' + format(date, 'h:mm aa');
    } else {
      // Format for before yesterday
      const formattedDate = format(date, "d MMMM yyyy 'at' h:mm aa");
      return formattedDate;
    }
  };
  const renderExpense = (expense) => {
    return (
      <StyledExpenseDiv key={expense?._id}>
        <StyledDiv>
          <StyledExpenseTitle>{expense?.content}</StyledExpenseTitle>
          <StyledExpenseTitle className='subTitle'>
            {formatDate(expense?.date)}
          </StyledExpenseTitle>
          <StyledChip label={expense?.category} color='success' />
        </StyledDiv>
        <StyledDiv className='expense-amount'>
          <StyledRupeeIcon />
          {expense?.amount}
        </StyledDiv>
      </StyledExpenseDiv>
    );
  };
  return (
    <StyledWrapper>
      <StyledTitle>Recent transactions</StyledTitle>
      <StyledExpensesDiv>
        {expenses.map((expense) => {
          return renderExpense(expense);
        })}
      </StyledExpensesDiv>
    </StyledWrapper>
  );
};

export default RecentTransaction;
