import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100;
  gap: 5px;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  backdrop-filter: blur(5px);
  border-radius: 10px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const StyledPersonInfoDiv = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: row;
  align-items: center;
`;

export const StyledTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: rgba(255, 104, 57, 0.9);
`;

export const StyledActions = styled.div``;
