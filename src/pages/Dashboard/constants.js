import {
  subDays,
  startOfDay,
  endOfDay,
  startOfMonth,
  endOfMonth,
  subMonths,
} from 'date-fns';

const today = new Date();
export const dateRange = [
  {
    id: 'today',
    label: 'Today',
    value: {
      fromDate: startOfDay(today),
      endDate: endOfDay(today),
    },
  },
  {
    id: 'yesterday',
    label: 'Yesterday',
    value: {
      fromDate: startOfDay(subDays(today, 1)),
      endDate: endOfDay(subDays(today, 1)),
    },
  },
  {
    id: 'last_7_days',
    label: 'Last 7 Days',
    value: {
      fromDate: startOfDay(subDays(today, 7)),
      endDate: endOfDay(today),
    },
  },
  {
    id: 'this_month',
    label: 'This Month',
    value: {
      fromDate: startOfMonth(today),
      endDate: endOfMonth(today),
    },
  },
  {
    id: 'last_month',
    label: 'Last Month',
    value: {
      fromDate: startOfMonth(subMonths(today, 1)),
      endDate: endOfMonth(subMonths(today, 1)),
    },
  },
];
