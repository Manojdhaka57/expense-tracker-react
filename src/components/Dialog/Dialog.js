import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import { Icons } from '../../Icons/icons';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    background: 'linear-gradient(to right,#E3823C, #E33C3C)',
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(0),
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    // justifyContent: 'flex-end',
    borderTop: '2px solid #fff',
    borderBottom: '2px solid #fff',
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
    background: '#fff',
  },
}));

const DialogBox = ({
  open,
  setOpen,
  title,
  children,
  actions,
  selectedAction,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        fullScreen
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 1,
            color: '#fff',
            bb: '2px',
            textTransform: 'capitalize',
          }}
          id='customized-dialog-title'
        >
          {title}
        </DialogTitle>
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#fff',
          }}
        >
          <Icons.CloseIcon />
        </IconButton>
        <DialogContent
          dividers
          sx={{
            justifyContent:
              selectedAction === actions.DELETE ? 'center' : 'flex-end',
          }}
        >
          {children}
        </DialogContent>
        <DialogActions>{actions()}</DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default DialogBox;
