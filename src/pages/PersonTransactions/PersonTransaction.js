import React, { useEffect } from 'react';
import { emit } from '../../hooks/useEventBus';
import { EVENT_BUS } from '../../config/appConfig';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import NavigationToBack from '../../components/NavigationToBack/NavigationToBack';
import { useDispatch } from 'react-redux';
import {
  getPersonTransactionHistory,
  getPersonTransactionSummary,
} from '../../actions/personActions';
import { StyledContentWrapper } from '../../styled/GlobalStyled';
import TransactionSummary from '../../components/PersonTransactions/TransactionSummary/TransactionSummary';
import TransactionHistory from '../../components/PersonTransactions/TransactionHistory/TransactionHistory';

const PersonTransaction = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { personId } = useParams();
  useEffect(() => {
    emit({
      type: EVENT_BUS.UPDATE_HEADER_EVENT,
      title: 'Person',
    });
    emit({
      type: EVENT_BUS.UPDATE_HEADER_BACK_BUTTON,
      component: (
        <NavigationToBack
          onClick={() => {
            navigate('/transactions', {
              replace: true,
              state: { location },
            });
          }}
        />
      ),
    });
    return () => {
      emit({
        type: EVENT_BUS.UPDATE_HEADER_EVENT,
        title: '',
      });
      emit({
        type: EVENT_BUS.UPDATE_HEADER_BACK_BUTTON,
        component: null,
      });
    };
  }, []);

  useEffect(() => {
    dispatch(getPersonTransactionSummary({ personId }));
    dispatch(getPersonTransactionHistory({ personId }));
  }, [personId]);
  return (
    <StyledContentWrapper>
      <TransactionSummary />
      <TransactionHistory />
    </StyledContentWrapper>
  );
};

export default PersonTransaction;
