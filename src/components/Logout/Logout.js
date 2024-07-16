import React, { Fragment } from 'react';
import { Icons } from '../../Icons/icons';
import { useAuth } from '../../providers/AuthProvider';
import styled from 'styled-components';

const StyledLogoutIcon = styled.div`
  height: 100%;
  display: flex;
  & svg {
    height: 28px;
    width: 28px;
  }
  &:hover {
    cursor: pointer;
    color: orange;
  }
`;
const Logout = () => {
  const { logout } = useAuth();
  return (
    <Fragment>
      <StyledLogoutIcon onClick={logout} role='logout-icon' title='logout'>
        <Icons.LogoutIcon />
      </StyledLogoutIcon>
    </Fragment>
  );
};

export default Logout;
