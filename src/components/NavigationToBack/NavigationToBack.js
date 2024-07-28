import React from 'react';
import styled from 'styled-components';
import { Icons } from '../../Icons/icons';
const StyledWrapper = styled.div`
  padding: 8px;
  &:hover {
    cursor: pointer;
  }
`;
const NavigationToBack = ({ onClick }) => {
  return (
    <StyledWrapper onClick={onClick} role='button'>
      <Icons.BackButtonIcon />
    </StyledWrapper>
  );
};

export default NavigationToBack;
