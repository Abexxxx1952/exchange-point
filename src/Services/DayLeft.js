const DayLeft = (day) => {
  const fulldate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * day);

  const Year = fulldate.getFullYear();
  const Month = () => {
    const res = fulldate.getMonth() + 1;
    return res.toString().length > 1 ? res : `0${res}`;
  };
  const Day = () => {
    const res = fulldate.getDate();
    return res.toString().length > 1 ? res : `0${res}`;
  };

  return `${Year}${Month()}${Day()}`;
};

export { DayLeft };
