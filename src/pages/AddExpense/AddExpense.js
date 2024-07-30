import React, { useEffect, useState } from 'react';
import { StyledContentWrapper } from '../../styled/GlobalStyled';
import { getAllCategory } from '../../actions/categoryActions';
import { useDispatch, useSelector } from 'react-redux';
import { renderField } from '../../common/utils';
import { DATE_FORMAT, EVENT_BUS, REGEXP } from '../../config/appConfig';
import { format } from 'date-fns';
import { Button } from '@mui/material';
import { alertActions } from '../../store/slices/alertSlice';
import { apiResponseStatus } from '../../config/apiConfig';
import { addExpense } from '../../actions/expenseActions';
import { emit } from '../../hooks/useEventBus';
import NavigationToBack from '../../components/NavigationToBack/NavigationToBack';
import { useLocation, useNavigate } from 'react-router-dom';

const AddExpense = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.category);
  const [formData, setFormData] = useState({});
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  useEffect(() => {
    emit({
      type: EVENT_BUS.UPDATE_HEADER_EVENT,
      title: 'Add Expense',
    });
    emit({
      type: EVENT_BUS.UPDATE_HEADER_BACK_BUTTON,
      component: (
        <NavigationToBack
          onClick={() => {
            navigate('/add', {
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

  const handleSubmit = () => {
    const { content, date, categoryId, amount } = formData;
    if (
      [content, date, categoryId, amount].every((value) => value?.length > 0)
    ) {
      dispatch(addExpense({ ...formData, date: new Date(formData.date) }));
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
  };

  const formFields = [
    {
      fieldType: 'textField',
      type: 'text',
      id: 'content',
      value: formData?.content || '',
      name: 'content',
      label: 'content',
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
      id: 'categoryId',
      value: formData?.categoryId || '',
      name: 'categoryId',
      label: 'category',
      items: categories,
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
  return (
    <StyledContentWrapper>
      {formFields.map((field) => {
        return renderField(field);
      })}
      <Button variant='contained' onClick={handleSubmit}>
        Add Expense
      </Button>
    </StyledContentWrapper>
  );
};

export default AddExpense;
