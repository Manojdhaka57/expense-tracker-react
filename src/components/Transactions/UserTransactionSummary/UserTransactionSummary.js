import find from 'lodash/find';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  StyledExpenseIcon,
  StyledIncomeIcon,
  StyledRupeeIcon,
} from '../../../styled/GlobalStyled';
import styled from 'styled-components';

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
const UserTransactionSummary = () => {
  const { transactionsSummary } = useSelector((state) => state.person);
  const send =
    find(transactionsSummary, ['_id', 'send'])?.totalTransactionAmount || 0;
  const received =
    find(transactionsSummary, ['_id', 'received'])?.totalTransactionAmount || 0;
  return (
    <StyledWrapper>
      <StyledDiv>
        <StyledExpenseDiv>
          <StyledIncomeIcon /> Received Money
        </StyledExpenseDiv>
        <StyledExpenseDiv>
          <StyledRupeeIcon />
          {received}
        </StyledExpenseDiv>
      </StyledDiv>
      <StyledDiv>
        <StyledExpenseDiv>
          <StyledExpenseIcon /> Sended Money
        </StyledExpenseDiv>
        <StyledExpenseDiv>
          <StyledRupeeIcon />
          {send}
        </StyledExpenseDiv>
      </StyledDiv>
    </StyledWrapper>
  );
};

export default UserTransactionSummary;
