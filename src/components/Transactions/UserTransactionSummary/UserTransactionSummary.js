import find from 'lodash/find';
import React, { useEffect, useState } from 'react';
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

  let interval = 2000;
  const [{ send, received }, setSummaryState] = useState({
    send: 0,
    received: 0,
  });
  useEffect(() => {
    transactionsSummary.forEach((transaction) => {
      let startValue = 0;
      let endValue = parseInt(transaction.totalTransactionAmount);
      let duration = Math.floor((interval * 100) / endValue);
      let counter = setInterval(() => {
        startValue = startValue + 100 > endValue ? endValue : startValue + 100;
        setSummaryState((prevState) => ({
          ...prevState,
          [transaction._id]: startValue,
        }));
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  }, [transactionsSummary]);
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
