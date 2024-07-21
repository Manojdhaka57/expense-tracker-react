import React, { useState } from 'react';
import { Icons } from '../../../Icons/icons';
import {
  StyledActionContextMenu,
  StyledContextMenu,
  StyledContextMenuWrapper,
  StyledMenu,
  StyledMenuItem,
} from './ActionContextMenu.styled';
import kebabCase from 'lodash/kebabCase';

const ActionContextMenu = ({ onClick, item, actions }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOnClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOnActionClick = (event) => {
    handleClose();
    onClick(event);
  };
  return (
    <StyledContextMenuWrapper>
      <StyledActionContextMenu>
        <StyledContextMenu onClick={handleOnClick}>
          {<Icons.VerticalDotsIcon />}
        </StyledContextMenu>
        <StyledMenu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          {Object.keys(actions).map((key) => {
            return (
              <StyledMenuItem
                data-action={key}
                key={`${item._id}-${key}`}
                onClick={handleOnActionClick}
                data-person-id={item._id}
                data-name={item.name}
              >
                <span className={`icon ${kebabCase(key)}`}>
                  {Icons[`${actions[key]}Icon`]}
                </span>
              </StyledMenuItem>
            );
          })}
        </StyledMenu>
      </StyledActionContextMenu>
    </StyledContextMenuWrapper>
  );
};

export default ActionContextMenu;