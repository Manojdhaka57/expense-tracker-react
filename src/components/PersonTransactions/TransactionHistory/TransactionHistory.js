import React, { useEffect, useState } from 'react';
import {
  StyledAddTransactionButton,
  StyledContentDiv,
  StyledContentWrapper,
  StyledDiv,
  StyledTransactionContentDiv,
  StyledTransactionDiv,
  StyledTransactionsDiv,
} from './TransactionHistory.styled';
import { useDispatch, useSelector } from 'react-redux';
import ActionContextMenu from './ActionContextMenu';
import {
  StyledButton,
  StyledButtonGroup,
  StyledExpenseIcon,
  StyledIncomeIcon,
  StyledRupeeIcon,
} from '../../../styled/GlobalStyled';
import { formatDate } from '../../../utils';
import DialogBox from '../../Dialog/Dialog';
import { renderField } from '../../../common/utils';
import { transactionTypes } from './constents';
import { DATE_FORMAT, REGEXP } from '../../../config/appConfig';
import { useParams } from 'react-router-dom';
import {
  addTransaction,
  deleteTransaction,
  editTransaction,
  getTransactionDetails,
} from '../../../actions/personActions';
import { alertActions } from '../../../store/slices/alertSlice';
import { apiResponseStatus } from '../../../config/apiConfig';
import { format } from 'date-fns';
import { Icons } from '../../../Icons/icons';

const TransactionHistory = () => {
  const dispatch = useDispatch();
  const { personId } = useParams();
  const [open, setOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState('');
  const [formData, setFormData] = useState({});
  const [selectedTransactionId, setSelectedTransactionId] = useState('');
  const { personTransactionsHistory, transactionDetails } = useSelector(
    (state) => state.person
  );
  const actions = {
    EDIT: 'Edit',
    DELETE: 'Delete',
  };

  useEffect(() => {
    if (selectedAction !== 'DELETE' && selectedTransactionId) {
      dispatch(getTransactionDetails({ transactionId: selectedTransactionId }));
    }
  }, [selectedTransactionId]);

  useEffect(() => {
    setFormData(transactionDetails);
  }, [transactionDetails]);

  const handleOnActionClick = (event) => {
    event.preventDefault();
    setOpen(true);
    const { action, transactionId } = event.currentTarget.dataset;
    setSelectedAction(action);
    setSelectedTransactionId(transactionId);
  };

  const handleOnCancel = () => {
    setSelectedAction('');
    setSelectedTransactionId('');
    setFormData({});
    setOpen(false);
  };

  const handleOnAddClick = () => {
    setOpen(true);
    setSelectedAction('ADD');
  };
  const handleOnSubmit = () => {
    if (selectedAction === 'EDIT' || selectedAction === 'ADD') {
      const { date, amount, transactionType, description } = formData;
      if (
        [date, amount?.toString(), transactionType].every(
          (value) => value?.length > 0
        )
      ) {
        // edit and add functionality
        const transactionPayload = {
          date: new Date(date),
          amount,
          transactionType,
          description,
          personId,
        };
        if (selectedAction === 'EDIT') {
          transactionPayload.transactionId = selectedTransactionId;
          dispatch(editTransaction(transactionPayload));
        } else if (selectedAction === 'ADD') {
          dispatch(addTransaction(transactionPayload));
        }
        setOpen(false);
        setSelectedTransactionId('');
        setSelectedAction('');
        setFormData({});
      } else {
        dispatch(
          alertActions.showAlert({
            show: true,
            type: apiResponseStatus.ERROR,
            message: 'All fields are required',
          })
        );
      }
    } else if (selectedAction === 'DELETE') {
      dispatch(
        deleteTransaction({ transactionId: selectedTransactionId, personId })
      );
      setOpen(false);
      setSelectedTransactionId('');
      setSelectedAction('');
    }
  };

  const dialogActions = () => {
    return (
      <StyledButtonGroup>
        <StyledButton onClick={handleOnCancel}>Cancel</StyledButton>
        <StyledButton onClick={handleOnSubmit}>Submit</StyledButton>
      </StyledButtonGroup>
    );
  };
  const renderTransaction = (transaction) => {
    return (
      <StyledTransactionDiv
        key={transaction?._id}
        className={transaction.transactionType}
      >
        <StyledTransactionContentDiv>
          <StyledDiv className='transaction-amount'>
            <StyledRupeeIcon
              className={`${transaction.transactionType}-ruppee-icon`}
            />
            <span>{transaction?.amount}</span>
            {transaction?.transactionType === 'send' ? (
              <StyledExpenseIcon />
            ) : (
              <StyledIncomeIcon />
            )}
          </StyledDiv>
          <StyledDiv className='description'>
            {transaction?.description}
          </StyledDiv>
          <StyledDiv className='transaction-date'>
            {formatDate(transaction?.createdAt)}
          </StyledDiv>
        </StyledTransactionContentDiv>
        <ActionContextMenu
          onClick={handleOnActionClick}
          item={transaction}
          actions={actions}
        />
      </StyledTransactionDiv>
    );
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === 'amount') {
      if (REGEXP.decimalValues.test(value) && value >= 0) {
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
    } else if (name === 'date') {
      setFormData((prevState) => ({
        ...prevState,
        [name]: format(value, DATE_FORMAT.YYYY_MM_DD_HH_MM_SS),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleOnBlur = (event) => {
    const { name, value } = event.target;
    if (value) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value.trim(),
      }));
    }
  };

  const formFields = [
    {
      fieldType: 'textField',
      type: 'text',
      id: 'description',
      value: formData?.description || '',
      name: 'description',
      label: 'description',
      onChange: handleOnChange,
      onBlur: handleOnBlur,
    },
    {
      fieldType: 'textField',
      type: 'text',
      id: 'amount',
      value: formData?.amount || '',
      name: 'amount',
      label: 'amount',
      onChange: handleOnChange,
      onBlur: handleOnBlur,
    },
    {
      fieldType: 'dropdown',
      id: 'transactionType',
      value: formData?.transactionType || '',
      name: 'transactionType',
      label: 'transactionType',
      items: transactionTypes,
      labelByKey: 'name',
      valueByKey: '_id',
      onChange: handleOnChange,
    },
    {
      fieldType: 'date',
      id: 'date',
      value: formData?.date || null,
      name: 'date',
      label: 'date',
      onChange: handleOnChange,
      config: {
        inputProps: {
          maxDate: new Date(),
          openTo: 'day',
          imputFormat: DATE_FORMAT.YYYY_MM_DD_HH_MM_SS,
        },
      },
      textFieldProps: { variant: 'outlined', size: 'small' },
    },
  ];

  const editFormContent = () => {
    return (
      <StyledContentWrapper>
        {formFields.map((field) => {
          return renderField(field);
        })}
      </StyledContentWrapper>
    );
  };
  const deleteFormContent = () => {
    return 'Are you sure you want to delete this person';
  };
  return (
    <StyledContentDiv>
      <StyledTransactionsDiv>
        {personTransactionsHistory.map((transaction) => {
          return renderTransaction(transaction);
        })}
      </StyledTransactionsDiv>
      {!open && (
        <StyledAddTransactionButton onClick={handleOnAddClick}>
          <Icons.AddIcon />
        </StyledAddTransactionButton>
      )}

      {open && (
        <DialogBox
          open={open}
          setOpen={setOpen}
          title={`${selectedAction} transaction`}
          actions={dialogActions}
        >
          <>
            {['EDIT', 'ADD'].includes(selectedAction) && editFormContent()}
            {selectedAction === 'DELETE' && deleteFormContent()}
          </>
        </DialogBox>
      )}
    </StyledContentDiv>
  );
};

export default TransactionHistory;
