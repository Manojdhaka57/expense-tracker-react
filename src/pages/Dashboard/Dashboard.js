import React, { useEffect, useState } from 'react';
import {
  StyledButton,
  StyledButtonGroup,
  StyledContentWrapper,
} from '../../styled/GlobalStyled';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllExpenses,
  getCategoryWiseExpense,
  getDayWiseExpense,
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
import { endOfMonth, format, startOfMonth } from 'date-fns';
import DialogBox from '../../components/Dialog/Dialog';
import { find } from 'lodash';
import DayWiseExpense from '../../components/Dashboard/DayWiseExpense';

const StyledFilterField = styled.div``;
const Dashboard = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [filterData, setFilterData] = useState({
    fromDate: format(startOfMonth(new Date()), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),
    endDate: format(endOfMonth(new Date()), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),
  });

  const [selectedFilters, setSelectedFilters] = useState({});

  const { pagination } = useSelector((state) => state.expenses);

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

  useEffect(() => {
    dispatch(
      getDayWiseExpense({
        fromDate: format(
          startOfMonth(new Date()),
          "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
        ),
        endDate: format(endOfMonth(new Date()), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),
      })
    );
  }, []);

  const handleLoadMore = () => {
    setFilterData((prevState) => ({
      ...prevState,
      size: prevState?.size ? prevState.size + 10 : 20,
    }));
  };

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
      <StyledButtonGroup>
        <StyledButton onClick={handleOnCancel}>Cancel</StyledButton>
        <StyledButton onClick={handleOnClearAll}>Clear All</StyledButton>
        <StyledButton onClick={handleOnSubmit}>Submit</StyledButton>
      </StyledButtonGroup>
    );
  };

  const showTransactionList =
    pagination?.totalRecords && pagination?.totalRecords > pagination?.size;
  return (
    <StyledContentWrapper>
      <History />
      <CategoryWiseExpense />
      <DayWiseExpense />
      <RecentTransaction />
      {showTransactionList ? (
        <StyledButton onClick={handleLoadMore}>Loading More .....</StyledButton>
      ) : null}
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
