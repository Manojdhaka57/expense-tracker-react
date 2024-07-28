import styled from 'styled-components';

export const StyledHeader = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  background-color: #f1f1f1;
  border-bottom: 2px solid #dfd9d2;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
`;

export const StyledHeaderTitleBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const StyledTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  color: #222222;
  text-transform: capitalize;
`;

export const StyledHeaderUserBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  padding: 2px 4px;
  gap: 6px;
`;

export const StyledUserIcon = styled.div`
  height: 100%
  padding-left: 2px;
  display: flex;
  & svg {
  height: 28px;
    width: 28px;
  }
`;
