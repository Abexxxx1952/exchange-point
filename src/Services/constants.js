export const API_URL_GOV = process.env.REACT_APP_BASE_URL + "?json";

export const API_URL_GOV_DATE = (date) => {
  return process.env.REACT_APP_BASE_URL + `?date=${date}&json`;
};

export const API_URL_GOV_DATE_CURRENCIES = (date, cur) => {
  return process.env.REACT_APP_BASE_URL + `?valcode=${cur}&date=${date}&json`;
};

const date = new Date();
const yestardate = new Date(date.getTime() - 24 * 60 * 60 * 1000);

export const dateToLocal = date.toLocaleDateString();
export const yestardateToLocal = yestardate.toLocaleDateString();

export const MENU_ITEMS = [
  { value: "Карта проезда", path: "/map" },
  { value: "О нас", path: "/about" },
];
