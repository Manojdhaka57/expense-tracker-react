import styled from 'styled-components';
import { cardAnimation } from '../../../styled/GlobalStyled';

export const StyledContentDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledTransactionsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledTransactionDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  height: 100%;
  padding: 12px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  animation: ${cardAnimation} linear;
  animation-duration: 2s;
  width: 70%;
  &.send {
    align-self: flex-end;
    border-right: 6px solid rgba(255, 104, 57, 0.9);
    color: #ff663a;
  }
  &.received {
    align-self: flex-start;
    border-left: 6px solid rgba(255, 104, 57, 0.9);
    color: #14a800;
  }
`;

export const StyledTransactionContentDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  > span {
    font-weight: bold;
  }
  & .send-ruppee-icon {
    color: #ff663a;
  }
  & .received-ruppee-icon {
    color: #14a800;
  }
  &.description {
    max-width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &.transaction-date {
    font-size: 12px;
    font-weight: 400;
    color: #737373;
  }
`;

export const StyledAddTransactionButton = styled.div`
  position: fixed;
  right: 24px;
  bottom: 60px;
  z-index: 99;
  cursor: pointer;
  svg {
    width: 38px;
    height: 38px;
    color: #ff663a;
  }
`;

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  background-color: #fff;
  padding: 24px;
  border-radius: 20px 20px 0px 0px;
`;
