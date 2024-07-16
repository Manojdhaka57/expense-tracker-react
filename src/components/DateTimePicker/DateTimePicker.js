import React from 'react';
import { DateTimePicker as MuiDateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
const DateTimePicker = ({ name, value, onChange, config, textFieldProps }) => {
  const {
    isDisabled = false,
    label = 'Select Date and Time',
    inputProps = {},
  } = config;
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDateTimePicker
        disabled={isDisabled}
        value={value}
        {...inputProps}
        onChange={(newValue) => onChange({ target: { name, value: newValue } })}
        renderInput={(props) => (
          <TextField {...props} variant='outlined' {...textFieldProps} />
        )}
      />
    </LocalizationProvider>
  );
};

export default DateTimePicker;
