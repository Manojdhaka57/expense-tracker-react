import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { StyledContentWrapper } from '../../styled/GlobalStyled';
import axios from 'axios';
import { useAuth } from '../../providers/AuthProvider';

const Login = () => {
  const auth = useAuth();
  const [formData, setFormData] = useState({});
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const loginFields = [
    {
      type: 'textField',
      name: 'username',
      label: 'Username',
      id: 'username',
      value: formData?.username || '',
    },
    {
      type: 'textField',
      name: 'password',
      label: 'Password',
      id: 'password',
      value: formData?.password || '',
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData?.username !== '' && formData?.password !== '') {
      auth.login(formData);
      return;
    }
    alert('Please enter valid username and password');
  };
  return (
    <StyledContentWrapper>
      {loginFields.map((field) => {
        return (
          <TextField
            key={field.id}
            name={field.name}
            label={field.label}
            value={field.value}
            onChange={handleOnChange}
          />
        );
      })}
      <Button variant='contained' onClick={handleSubmit}>
        Login
      </Button>
    </StyledContentWrapper>
  );
};

export default Login;
