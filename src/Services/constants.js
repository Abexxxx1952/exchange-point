export const API_URL_GOV =
  "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";
export const API_URL_GOV_DATE = (date) => {
  return `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date}&json`;
};

const date = new Date();
const yestardate = new Date(date.getTime() - 24 * 60 * 60 * 1000);
export const dateToLocal = date.toLocaleDateString();
export const yestardateToLocal = yestardate.toLocaleDateString();
const yestardateYear = yestardate.getFullYear();
const yestardateMonth = () => {
  const res = yestardate.getMonth() + 1;
  return res.toString().length > 1 ? res : `0${res}`;
};
const yestardateDay = () => {
  const res = yestardate.getDate();
  return res.toString().length > 1 ? res : `0${res}`;
};

export const requestDate = `${yestardateYear}${yestardateMonth()}${yestardateDay()}`;
