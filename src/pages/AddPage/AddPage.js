import React from 'react';
import { StyledCard, StyledContentWrapper } from '../../styled/GlobalStyled';
import styled from 'styled-components';
import { Icons } from '../../Icons/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { fields } from './constants';

const StyledLabel = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #ffa500;
  text-transform: capitalize;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-wrap: wrap;
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    svg {
      width: 24px;
      height: 24px;
      color: orange;
      background-color: white;
    }
  }
`;
const AddPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnClick = (event) => {
    const { path } = event.currentTarget.dataset;
    navigate(path, {
      replace: true,
      state: {
        location,
      },
    });
  };
  const renderCard = ({ id, label, path }) => {
    return (
      <StyledCard key={id} onClick={handleOnClick} data-path={path}>
        <Icons.AddIcon />
        <StyledLabel>{label}</StyledLabel>
      </StyledCard>
    );
  };
  return (
    <StyledContentWrapper>
      <StyledDiv>{fields.map((field) => renderCard(field))}</StyledDiv>
    </StyledContentWrapper>
  );
};

export default AddPage;
