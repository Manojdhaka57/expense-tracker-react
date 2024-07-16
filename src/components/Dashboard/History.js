import React from 'react';
import styled from 'styled-components';
import find from 'lodash/find';
import { useSelector } from 'react-redux';
import {
  StyledExpenseIcon,
  StyledIncomeIcon,
  StyledRupeeIcon,
} from '../../styled/GlobalStyled';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  width: 100%;
  background-image: linear-gradient(
    to right,
    rgba(84, 126, 230, 0.8),
    rgba(247, 137, 148, 1)
  );
  border-radius: 10px;
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
const History = () => {
  const { expensesSummary } = useSelector((state) => state.expenses);
  const income = find(expensesSummary, ['_id', 'income'])?.totalExpenses || 0;
  const expenses =
    find(expensesSummary, ['_id', 'expense'])?.totalExpenses || 0;
  return (
    <StyledWrapper>
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
    </StyledWrapper>
  );
};

export default History;
