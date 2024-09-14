import React, { useEffect, useState } from 'react';
import {
  StyledActions,
  StyledDiv,
  StyledPersonInfoDiv,
  StyledTitle,
  StyledWrapper,
} from './AllPerson.styled';
import ActionContextMenu from './ActionContextMenu';
import Avatar from '@mui/material/Avatar';
import {
  StyledButton,
  StyledButtonGroup,
  StyledContentWrapper,
  StyledUserIcon,
} from '../../../styled/GlobalStyled';
import Dialog from '../../Dialog/Dialog';
import { renderField } from '../../../common/utils';
import { alertActions } from '../../../store/slices/alertSlice';
import { apiResponseStatus } from '../../../config/apiConfig';
import { useDispatch } from 'react-redux';
import { deletePerson, editPerson } from '../../../actions/personActions';
import { useLocation, useNavigate } from 'react-router-dom';
import { emit } from '../../../hooks/useEventBus';
import { EVENT_BUS } from '../../../config/appConfig';

const AllPerson = ({ allPersons = [] }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState('');
  const [formData, setFormData] = useState({});
  const [selectedPersonId, setSelectedPersonId] = useState('');

  useEffect(() => {
    emit({
      type: EVENT_BUS.UPDATE_HEADER_EVENT,
      title: 'All Persons',
    });
    return () => {
      emit({
        type: EVENT_BUS.UPDATE_HEADER_EVENT,
        title: '',
      });
    };
  }, []);

  const handleOnActionClick = (event) => {
    event.preventDefault();
    setOpen(true);
    const { action, personId, name } = event.currentTarget.dataset;
    setFormData({ name });
    setSelectedAction(action);
    setSelectedPersonId(personId);
  };
  const actions = {
    EDIT: 'Edit',
    DELETE: 'Delete',
  };

  const handleOnPersonDetails = (event) => {
    const { personId } = event.currentTarget.dataset;
    navigate(`/transactions/${personId}`, {
      replace: true,
      state: {
        location,
      },
    });
  };
  const renderPersonDetail = (person) => {
    return (
      <StyledDiv key={person?._id}>
        <StyledPersonInfoDiv
          onClick={handleOnPersonDetails}
          data-person-id={person?._id}
        >
          <StyledUserIcon>
            <Avatar sx={{ width: 24, height: 24 }}>
              {person?.name?.charAt(0).toUpperCase()}
            </Avatar>
          </StyledUserIcon>
          <StyledTitle>{person?.name}</StyledTitle>
        </StyledPersonInfoDiv>
        <ActionContextMenu
          onClick={handleOnActionClick}
          item={person}
          actions={actions}
        />
      </StyledDiv>
    );
  };

  const handleOnCancel = () => {
    setOpen(false);
  };
  const handleOnSubmit = () => {
    if (selectedAction === 'EDIT') {
      const { name } = formData;
      if ([name].every((value) => value?.length > 0)) {
        dispatch(editPerson({ ...formData, personId: selectedPersonId }));
        setOpen(false);
      } else {
        dispatch(
          alertActions.showAlert({
            show: true,
            type: apiResponseStatus.ERROR,
            message: 'All fields are required',
          })
        );
      }
    } else if (selectedAction === 'DELETE') {
      dispatch(deletePerson({ personId: selectedPersonId }));
      setOpen(false);
    }
  };
  const dialogActions = () => {
    return (
      <StyledButtonGroup>
        <StyledButton onClick={handleOnCancel}>Cancel</StyledButton>
        <StyledButton onClick={handleOnSubmit}>Submit</StyledButton>
      </StyledButtonGroup>
    );
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleOnBlur = (event) => {
    const { name, value } = event.target;
    if (value) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value.trim(),
      }));
    }
  };

  const formFields = [
    {
      fieldType: 'textField',
      type: 'text',
      id: 'name',
      value: formData?.name || '',
      name: 'name',
      label: 'person name',
      onChange: handleOnChange,
      onBlur: handleOnBlur,
    },
  ];
  const editFormContent = () => {
    return (
      <StyledContentWrapper>
        {formFields.map((field) => {
          return renderField(field);
        })}
      </StyledContentWrapper>
    );
  };

  const deleteFormContent = () => {
    return 'Are you sure you want to delete this person';
  };
  return (
    <StyledWrapper>
      {allPersons.map((person) => {
        return renderPersonDetail(person);
      })}
      {open && (
        <Dialog
          open={open}
          setOpen={setOpen}
          title={'person'}
          actions={dialogActions}
        >
          <>
            {selectedAction === 'EDIT' && editFormContent()}
            {selectedAction === 'DELETE' && deleteFormContent()}
          </>
        </Dialog>
      )}
    </StyledWrapper>
  );
};

export default AllPerson;
