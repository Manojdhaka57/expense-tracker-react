import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPersons } from '../../actions/personActions';
import { StyledContentWrapper } from '../../styled/GlobalStyled';
import AllPerson from '../../components/Transactions/AllPerson/AllPerson';

const Transactions = () => {
  const dispatch = useDispatch();
  const { allPersons } = useSelector((state) => state.person);
  useEffect(() => {
    dispatch(getAllPersons());
  }, []);
  return (
    <StyledContentWrapper>
      <AllPerson allPersons={allPersons} />
    </StyledContentWrapper>
  );
};

export default Transactions;
