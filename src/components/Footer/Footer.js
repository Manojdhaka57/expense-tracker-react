import React, { useState, useEffect } from 'react';
import { StyledFooter } from './Footer.styled';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Icons } from '../../Icons/icons';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [value, setValue] = useState('');
  const handleOnChange = (event, newValue) => {
    navigate(newValue);
    // setValue(newValue);
  };

  useEffect(() => {
    setValue(pathname);
  }, [pathname]);
  const footerActions = [
    {
      label: '',
      value: '/dashboard',
      icon: <Icons.HomeIcon />,
    },
    {
      value: '/transactions',
      icon: <Icons.TransactionsIcon />,
    },
    {
      value: '/add',
      icon: <Icons.AddIcon />,
    },
    {
      value: '/wallet',
      icon: <Icons.WalletIcon />,
    },
    {
      label: '',
      value: '/userDetails',
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
            <BottomNavigationAction
              key={value}
              value={value}
              label={label}
              icon={icon}
            />
          );
        })}
      </BottomNavigation>
    </StyledFooter>
  );
};

export default Footer;
