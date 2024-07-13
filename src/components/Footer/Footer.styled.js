import styled from 'styled-components';

export const StyledFooter = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  background-color: #f1f1f1;
  border-top: 2px solid #dfd9d2;
  // padding: 0px 18px;
  & .MuiButtonBase-root {
    min-width: 30px;
    > svg {
      width: 18px;
      height: 18px;
    }
    &.Mui-selected {
      > svg {
        width: 24px;
        height: 24px;
      }
    }
  }
`;
