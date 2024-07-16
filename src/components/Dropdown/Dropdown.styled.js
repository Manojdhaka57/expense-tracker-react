import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components';

export const StyledInputLabel = styled(InputLabel)`
  &.MuiInputLabel-root {
    font-size: ${(props) => props.fontSize || '14px'};
    color: #a49c9cde;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  &.MuiMenuItem-root{
    font-size; ${(props) => props.fontSize || '0.85rem'};
    white-space: break-spaces;
    width: ${(props) => props.width || '100%'};
    &.none {
      color: #cfcfca;
    }
  }
`;

export const StyledSelect = styled(Select)`
  &.MuiInputBase-root {
    &.MuiOutlinedInput-root {
      height: 40px;
      font-size: 14px;
    }
  }
`;
export const StyledFormControl = styled(FormControl)``;
