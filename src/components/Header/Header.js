import React, { useState } from 'react';
import {
  StyledHeader,
  StyledHeaderTitleBlock,
  StyledHeaderUserBlock,
  StyledTitle,
  StyledUserIcon,
} from './Header.styled';
import Avatar from '@mui/material/Avatar';
import { useAuth } from '../../providers/AuthProvider';
import Logout from '../Logout/Logout';
import useEventBus from '../../hooks/useEventBus';
import { EVENT_BUS } from '../../config/appConfig';
const Header = () => {
  const { username } = useAuth();
  const [title, setTitle] = useState('Expense Tracker');
  const [backButtonComponent, setBackButtonComponent] = useState(null);

  useEventBus(
    EVENT_BUS.UPDATE_HEADER_EVENT,
    ({ title }) => setTitle(title),
    []
  );

  useEventBus(
    EVENT_BUS.UPDATE_HEADER_BACK_BUTTON,
    ({ component }) => setBackButtonComponent(component),
    []
  );
  return (
    <StyledHeader>
      <StyledHeaderTitleBlock>
        {backButtonComponent}
        {title && <StyledTitle>{title}</StyledTitle>}
      </StyledHeaderTitleBlock>
      <StyledHeaderUserBlock>
        <StyledUserIcon>
          <Avatar sx={{ width: 36, height: 36 }}>
            {username?.charAt(0).toUpperCase()}
          </Avatar>
        </StyledUserIcon>
        <Logout />
      </StyledHeaderUserBlock>
    </StyledHeader>
  );
};

export default Header;
