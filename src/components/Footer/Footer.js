import React, { useState } from 'react';
import { StyledFooter } from './Footer.styled';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Icons } from '../../Icons/icons';

const Footer = () => {
  const [value, setValue] = useState('home');
  const handleOnChange = (event, newValue) => {
    setValue(newValue);
  };

  const footerActions = [
    {
      label: '',
      value: 'home',
      icon: <Icons.HomeIcon />,
    },
    {
      value: 'transctions',
      icon: <Icons.TransactionsIcon />,
    },
    {
      value: 'add',
      icon: <Icons.AddIcon />,
    },
    {
      value: 'wallet',
      icon: <Icons.WalletIcon />,
    },
    {
      label: '',
      value: 'user',
      icon: <Icons.UserIcon />,
    },
  ];
  return (
    <StyledFooter>
      <BottomNavigation
        sx={{ width: '100%' }}
        value={value}
        onChange={handleOnChange}
      >
        {footerActions.map(({ label, value, icon }) => {
          return (
            <BottomNavigationAction value={value} label={label} icon={icon} />
          );
        })}
      </BottomNavigation>
    </StyledFooter>
  );
};

export default Footer;
