import React from 'react';
import {
  StyledHeader,
  StyledHeaderUserBlock,
  StyledTitle,
  StyledUserIcon,
} from './Header.styled';
import Avatar from '@mui/material/Avatar';
import { useAuth } from '../../providers/AuthProvider';
import Logout from '../Logout/Logout';
const Header = () => {
  const { username } = useAuth();
  return (
    <StyledHeader>
      <StyledTitle>Expense Tracker</StyledTitle>
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
