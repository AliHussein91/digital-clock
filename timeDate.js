const WEEK = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday',
};

const MONTH = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

let checkTime = (time) => {
  return time < 10 ? '0' + time : time;
};

let checkDate = (date) => {
  let length = date.toString().length;
  length = length - 1;
  if (date.toString()[length] == 1) {
    return 'st';
  } else if (date.toString()[length] == 2) {
    return 'nd';
  } else if (date.toString()[length] == 3) {
    return 'rd';
  } else {
    return 'th';
  }
};
