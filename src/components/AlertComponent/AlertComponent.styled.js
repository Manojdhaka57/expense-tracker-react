import MuiAlert from '@mui/material/Alert';
import styled from 'styled-components';

export const StyledAlert = styled(MuiAlert)`
  &.alert{
    border-radius: 6px;
    padding: 8px 16px;
  }

  &.success-alert{
    background-color: #25a528;
    color: #fff;
  }

  &.error-alert{
  background-color: #d62828
    color: #fff;
  }
`;
