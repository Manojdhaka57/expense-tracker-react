import React from 'react';
import {
  StyledFormControl,
  StyledInputLabel,
  StyledMenuItem,
  StyledSelect,
} from './Dropdown.styled';
import isEmpty from 'lodash/isEmpty';
import FormHelperText from '@mui/material/FormHelperText';

const Dropdown = ({
  id,
  name,
  value,
  label,
  items,
  disabled,
  size,
  valueByKey,
  labelByKey,
  onChange,
  fontSize,
  isNoneSupported,
  error,
  helperText,
  noneLabelText,
  width,
}) => {
  return (
    <StyledFormControl
      fullWidth
      key={id}
      size='small'
      variant='outlined'
      error={error}
      sx={{ width: '100%' }}
    >
      <StyledInputLabel id={id} fontSize={fontSize}>
        {label}
      </StyledInputLabel>
      <StyledSelect
        labelId={id}
        id={id}
        value={isEmpty(items) ? '' : value}
        label={label}
        disabled={disabled}
        name={name}
        onChange={onChange}
        size={size}
        fontSize={fontSize}
      >
        {isNoneSupported && (
          <StyledMenuItem className='none' value='' fontSize={fontSize}>
            <em>{noneLabelText}</em>
          </StyledMenuItem>
        )}
        {items.map((item) => (
          <StyledMenuItem
            key={valueByKey ? item[valueByKey] : item.label}
            value={valueByKey ? item[valueByKey] : item.type}
            fontSize={fontSize}
            disabled={item.disabled}
            width={width}
          >
            {labelByKey ? item[labelByKey] : item.label}
          </StyledMenuItem>
        ))}
      </StyledSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </StyledFormControl>
  );
};

export default Dropdown;
