import find from 'lodash/find';

export const getDataByYearAndMonth = (data, year, month) => {
  return find(
    data,
    (item) => item?._id?.year === year && item?._id?.month === month
  );
};
