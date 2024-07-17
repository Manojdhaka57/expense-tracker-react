import styled from 'styled-components';

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;

export const StyledContent = styled.div`
  margin-top: ${(props) => (props.$isauthenticated ? '50px' : '0px')};
  margin-bottom: ${(props) => (props.$isauthenticated ? '56px' : '0px')};
  width: 100%;
`;

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.3s linear;
  width: 100%;
`;
