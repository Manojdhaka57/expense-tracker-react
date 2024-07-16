import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { StyledContentWrapper } from '../../styled/GlobalStyled';
import { useAuth } from '../../providers/AuthProvider';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';

const StyledContentWrapperLogin = styled(StyledContentWrapper)`
  justify-content: center;
  height: 100vh;
`;

const StyleldTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  & span {
    color: orange;
  }
`;

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
      type: 'password',
      name: 'password',
      label: 'Password',
      id: 'password',
      value: formData?.password || '',
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEmpty(formData?.username) && !isEmpty(formData?.password)) {
      auth.login(formData);
      return;
    }
    alert('Please enter valid username and password');
  };
  return (
    <StyledContentWrapperLogin>
      <StyleldTitle>
        Welcome to <span>Expense Tracker</span>
      </StyleldTitle>
      {loginFields.map((field) => {
        return (
          <TextField
            type={field.type}
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
    </StyledContentWrapperLogin>
  );
};

export default Login;
