import Box from '@mui/material/Box';
import React from 'react';
import styled from 'styled-components';

export const StyledWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px;
  height: calc(100% - 120px);
  & p {
    color: #413f3fde;
    font-size: 0.85rem;
    padding: 0.25rem 0;
  }
`;
const PageNotFound = () => {
  return (
    <StyledWrapper>
      <h2>404, Page not found</h2>
      <p>
        you're either misspelled the url or requested a page that's no longer
        here
      </p>
    </StyledWrapper>
  );
};

export default PageNotFound;
