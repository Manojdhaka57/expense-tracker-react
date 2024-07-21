import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import styled from 'styled-components';

export const StyledContextMenuWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledActionContextMenu = styled.div``;

export const StyledContextMenu = styled.div`
  display: flex;
  align-items: center;
  margin: 0.25rem;
  height: 100%;
  cursor: pointer;
  svg {
    height: 24px;
    width: 24px;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  &.MuiMenuItem-root {
    padding: 0.5rem;
    & span {
      display: flex;
      align-items: center;
      padding: 0 0.15rem;
      font-size: 0.85rem;
      &.delete {
        color: red;
      }
      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const StyledMenu = styled(Menu)``;
