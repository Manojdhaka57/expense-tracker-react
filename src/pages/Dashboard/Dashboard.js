import React, { useEffect, useState } from 'react';
import { StyledContentWrapper } from '../../styled/GlobalStyled';
import { useDispatch } from 'react-redux';
import {
  getAllExpenses,
  getCategoryWiseExpense,
  getExpensesSummary,
} from '../../actions/expenseActions';
import History from '../../components/Dashboard/History';
import RecentTransaction from '../../components/Dashboard/RecentTransaction';
import { emit } from '../../hooks/useEventBus';
import { DATE_FORMAT, EVENT_BUS } from '../../config/appConfig';
import CategoryWiseExpense from '../../components/Dashboard/CategoryWiseExpense';
import { dateRange } from './constants';
import { renderField } from '../../common/utils';
import styled from 'styled-components';
import { Icons } from '../../Icons/icons';
import { StyledFilterButton } from './Dashboard.stylded';
import { endOfMonth, format, startOfDay, startOfMonth } from 'date-fns';
import DialogBox from '../../components/Dialog/Dialog';
import { Button, ButtonGroup } from '@mui/material';
import { filter, find } from 'lodash';

const StyledFilterField = styled.div``;
const Dashboard = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [filterData, setFilterData] = useState({
    fromDate: format(startOfMonth(new Date()), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),
    endDate: format(endOfMonth(new Date()), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),
  });

  const [selectedFilters, setSelectedFilters] = useState({});

  useEffect(() => {
    emit({
      type: EVENT_BUS.UPDATE_HEADER_EVENT,
      title: 'Dashboard',
    });
    return () => {
      emit({
        type: EVENT_BUS.UPDATE_HEADER_EVENT,
        title: '',
      });
    };
  });
  useEffect(() => {
    dispatch(getAllExpenses(filterData));
    dispatch(getExpensesSummary(filterData));
    dispatch(getCategoryWiseExpense(filterData));
  }, [filterData]);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setSelectedFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const filterFormFields = [
    {
      fieldType: 'dropdown',
      id: 'duration',
      value: selectedFilters?.duration || '',
      name: 'duration',
      label: 'duration',
      items: dateRange,
      labelByKey: 'label',
      valueByKey: 'id',
      onChange: handleOnChange,
    },
  ];
  const filters = () => {
    return (
      <StyledFilterField>
        {filterFormFields.map((field) => {
          return renderField(field);
        })}
      </StyledFilterField>
    );
  };
  const handleOnFilterClick = () => {
    setOpen(true);
  };

  const handleOnCancel = () => {
    setOpen(false);
  };

  const handleOnSubmit = () => {
    const { duration } = selectedFilters;
    const selectedValues = find(dateRange, ['id', duration]);
    if (selectedValues && selectedValues.value) {
      setFilterData({
        fromDate: format(
          selectedValues.value.fromDate,
          "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
        ),
        endDate: format(
          selectedValues.value.endDate,
          "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
        ),
      });
      setOpen(false);
    }
  };

  const handleOnClearAll = () => {
    setSelectedFilters({});
    setFilterData({});
    setOpen(false);
  };

  const dialogActions = () => {
    return (
      <ButtonGroup>
        <Button onClick={handleOnCancel}>Cancel</Button>
        <Button onClick={handleOnClearAll}>Clear All</Button>
        <Button onClick={handleOnSubmit}>Submit</Button>
      </ButtonGroup>
    );
  };
  return (
    <StyledContentWrapper>
      <History />
      <CategoryWiseExpense />
      <RecentTransaction />
      {!open && (
        <StyledFilterButton onClick={handleOnFilterClick}>
          <Icons.FilterIcon />
        </StyledFilterButton>
      )}
      {open && (
        <DialogBox
          open={open}
          setOpen={setOpen}
          title={'Filters'}
          actions={dialogActions}
        >
          {filters()}
        </DialogBox>
      )}
    </StyledContentWrapper>
  );
};

export default Dashboard;
