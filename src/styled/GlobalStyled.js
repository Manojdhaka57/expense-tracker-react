import styled, { createGlobalStyle, keyframes } from 'styled-components';
import Box from '@mui/material/Box';
import MuiCard from '@mui/material/Card';
import { Icons } from '../Icons/icons';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Chip from '@mui/material/Chip';
export default createGlobalStyle`
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  body {
    background-color: #f5f5f5;
    min-height: 100vh;
  }
`;

export const cardAnimation = keyframes`
  0% {opacity: 0; scale: 1;}
  20% {opacity: 0.2; scale: 0.95; }
  50% {opacity: 0.5; scale: 1.05; }
  100% {opacity: 1;  scale:1;}
`;
export const StyledContentWrapper = styled(Box).attrs({
  sx: {
    p: [2],
    pb: '16px',
    minHeight: `calc(100vh - 120px)`,
  },
})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledLoading = styled.div`
  font-size: 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledIncomeIcon = styled(Icons.ArrowDownIcon)`
  width: 20px;
  height: 20px;
  padding: 4px;
  color: #fff;
  margin-right: 5px;
  border-radius: 50%;
  background-color: #14a800;
`;

export const StyledExpenseIcon = styled(Icons.ArrowUpIcon)`
  width: 20px;
  height: 20px;
  padding: 4px;
  color: #fff;
  margin-right: 5px;
  border-radius: 50%;
  background-color: #ff663a;
`;

export const StyledRupeeIcon = styled(Icons.RupeeIcon)`
  width: 16px;
  height: 16px;
  color: #fff;
`;

export const StyledTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;

export const StyledCard = styled(MuiCard)`
  background-color: #081529;
  box-shadow: 0 6px 10px -4px #00000026;
  border-radius: 10px;
  padding: 18px;
`;
export const StyledFormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const StyledComponentLabel = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #929292;
  text-transform: capitalize;
`;

export const StyledUserIcon = styled.div`
  height: 100%;
  padding-left: 2px;
  display: flex;
  & svg {
    height: 24px;
    width: 24px;
  }
`;

export const StyledButtonGroup = styled(ButtonGroup)`
  display: flex;
  gap: 12px;
`;

export const StyledButton = styled(Button)`
  &.MuiButton-root {
    border: 1px solid #ff663a !important;
    border-radius: 10px;
    font-weight: 400;
    font-size: 14px;
    color: #ff663a !important;
    padding: 5px 10px;
  }
`;

export const StyledChip = styled(Chip)`
  &.MuiChip-root {
    width: min-content;
    border-radius: 10px;
    background-color: #3a88ff;

    box-shadow: 0 6px 10px -4px #00000026;
  }
`;
