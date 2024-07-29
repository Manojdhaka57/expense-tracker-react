import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllPersons,
  userTransactionsSummary,
} from '../../actions/personActions';
import { StyledContentWrapper } from '../../styled/GlobalStyled';
import AllPerson from '../../components/Transactions/AllPerson/AllPerson';
import UserTransactionSummary from '../../components/Transactions/UserTransactionSummary/UserTransactionSummary';
import { personActions } from '../../store/slices/personSlice';

const Transactions = () => {
  const dispatch = useDispatch();
  const { allPersons } = useSelector((state) => state.person);
  useEffect(() => {
    dispatch(getAllPersons());
    dispatch(userTransactionsSummary({}));
    return () => {
      dispatch(personActions.updateAllPersons([]));
      dispatch(personActions.updateUserTransactionsSummary([]));
    };
  }, []);
  return (
    <StyledContentWrapper>
      <UserTransactionSummary />
      <AllPerson allPersons={allPersons} />
    </StyledContentWrapper>
  );
};

export default Transactions;
