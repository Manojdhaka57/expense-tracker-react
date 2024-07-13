import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import React from 'react';
const renderCircularProgress = ({ id, size, color, varient, value, style }) => {
  return (
    <CircularProgress
      size={size}
      color={color}
      id={id}
      value={value}
      varient={varient}
      sx={style}
    />
  );
};
const Loader = (props) => {
  const { backdrop, zIndex } = props;
  return backdrop ? (
    <Backdrop open sx={{ zIndex: zIndex }} className='loader-backdrop'>
      {renderCircularProgress(props)}
    </Backdrop>
  ) : (
    renderCircularProgress(props)
  );
};
Loader.defaultProps = {
  id: 'loader',
  color: 'primary',
  backdrop: false,
  value: 5,
};
export default Loader;
