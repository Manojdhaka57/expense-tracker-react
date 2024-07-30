import React, { useEffect, useState } from 'react';
import { StyledContentWrapper } from '../../styled/GlobalStyled';
import Button from '@mui/material/Button';
import { renderField } from '../../common/utils';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../actions/categoryActions';
import { alertActions } from '../../store/slices/alertSlice';
import { apiResponseStatus } from '../../config/apiConfig';
import { useLocation, useNavigate } from 'react-router-dom';
import { emit } from '../../hooks/useEventBus';
import { EVENT_BUS } from '../../config/appConfig';
import NavigationToBack from '../../components/NavigationToBack/NavigationToBack';

const AddCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({});
  useEffect(() => {
    emit({
      type: EVENT_BUS.UPDATE_HEADER_EVENT,
      title: 'Add Category',
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
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
    const { name } = formData;
    if ([name].every((value) => value?.length > 0)) {
      dispatch(addCategory(formData));
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
      id: 'name',
      value: formData?.name || '',
      name: 'name',
      label: 'category name',
      onChange: handleOnChange,
      onBlur: handleOnBlur,
    },
  ];
  return (
    <StyledContentWrapper>
      {formFields.map((field) => {
        return renderField(field);
      })}
      <Button variant='contained' onClick={handleSubmit}>
        Add Category
      </Button>
    </StyledContentWrapper>
  );
};

export default AddCategory;
