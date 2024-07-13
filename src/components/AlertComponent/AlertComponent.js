import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledAlert } from './AlertComponent.styled';
import { alertActions } from '../../store/slices/alertSlice';
import { Icons } from '../../Icons/icons';
import { ALERT } from '../../utils';
const SEVERITY_TYPES = {
  INFO: 'info',
  ERROR: 'error',
  SUCCESS: 'success',
  WARNING: 'warning',
};
const AlertComponent = () => {
  const { show, type, message, messageId, messageValues } = useSelector(
    (state) => state.alert
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        return dispatch(alertActions.hideAlert());
      }, ALERT.EXPIRATION_TIME);
    }
  }, [show]);

  const alertStyle = {
    position: 'absolute',
    left: '50%',
    top: '20px',
    zIndex: '99999',
    transform: 'translateX(-50%)',
    corsor: 'pointer',
    width: '90%',
    wordWrap: 'break-word',
  };

  const closAlertHandler = () => {
    dispatch(alertActions.hideAlert());
  };

  return (
    show && (
      <StyledAlert
        severity={type}
        sx={alertStyle}
        className={`alert ${type}-alert`}
        action={
          <Icons.CloseIcon
            role='alert-btn-close'
            onClick={closAlertHandler}
            size='25px'
          />
        }
      >
        {message || messageId}
      </StyledAlert>
    )
  );
};

export default AlertComponent;
