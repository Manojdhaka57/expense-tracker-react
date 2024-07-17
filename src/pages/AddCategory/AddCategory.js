import React, { useState } from 'react';
import { StyledContentWrapper } from '../../styled/GlobalStyled';
import Button from '@mui/material/Button';
import { renderField } from '../../common/utils';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../actions/categoryActions';
import { alertActions } from '../../store/slices/alertSlice';
import { apiResponseStatus } from '../../config/apiConfig';

const AddCategory = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});

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
