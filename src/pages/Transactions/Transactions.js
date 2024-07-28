import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllPersons,
  userTransactionsSummary,
} from '../../actions/personActions';
import { StyledContentWrapper } from '../../styled/GlobalStyled';
import AllPerson from '../../components/Transactions/AllPerson/AllPerson';
import UserTransactionSummary from '../../components/Transactions/UserTransactionSummary/UserTransactionSummary';

const Transactions = () => {
  const dispatch = useDispatch();
  const { allPersons } = useSelector((state) => state.person);
  useEffect(() => {
    dispatch(getAllPersons());
    dispatch(userTransactionsSummary({}));
  }, []);
  return (
    <StyledContentWrapper>
      <UserTransactionSummary />
      <AllPerson allPersons={allPersons} />
    </StyledContentWrapper>
  );
};

export default Transactions;
