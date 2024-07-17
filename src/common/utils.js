import TextField from '@mui/material/TextField';
import { StyledComponentLabel, StyledFormField } from '../styled/GlobalStyled';
import Dropdown from '../components/Dropdown/Dropdown';
import DateTimePicker from '../components/DateTimePicker/DateTimePicker';

export const renderDropdownField = (field) => {
  return (
    <StyledFormField key={field.id}>
      <StyledComponentLabel>{field.label}</StyledComponentLabel>
      <Dropdown
        id={field.id}
        value={field.value}
        name={field.name}
        items={field.items}
        labelByKey={field.labelByKey}
        valueByKey={field.valueByKey}
        onChange={field.onChange}
      />
    </StyledFormField>
  );
};

export const renderTextField = (field) => {
  return (
    <StyledFormField key={field.id}>
      <StyledComponentLabel>{field.label}</StyledComponentLabel>
      <TextField
        type={field.type}
        key={field.id}
        name={field.name}
        value={field.value}
        onChange={field.onChange}
        size='small'
        onBlur={field.onBlur}
      />
    </StyledFormField>
  );
};

export const renderDateTimePicker = (field) => {
  return (
    <StyledFormField key={field.id}>
      <StyledComponentLabel>{field.label}</StyledComponentLabel>
      <DateTimePicker
        key={field.id}
        name={field.name}
        value={field.value}
        onChange={field.onChange}
        config={field.config}
        textFieldProps={field.textFieldProps}
      />
    </StyledFormField>
  );
};

export const renderField = (field) => {
  if (field.fieldType === 'textField') {
    return renderTextField(field);
  } else if (field.fieldType === 'dropdown') {
    return renderDropdownField(field);
  } else if (field.fieldType === 'date') {
    return renderDateTimePicker(field);
  }
};
