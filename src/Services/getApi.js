import {
  API_URL_GOV,
  API_URL_GOV_DATE,
  API_URL_GOV_DATE_CURRENCIS,
} from "./constants";

export const getApi = async () => {
  const res = await fetch(API_URL_GOV);
  return await res.json();
};

export const getApiDate = async (date) => {
  const res = await fetch(API_URL_GOV_DATE(date));
  return await res.json();
};

export const getApiDateCurrencie = async (date, cur) => {
  const res = await fetch(API_URL_GOV_DATE_CURRENCIS(date, cur));
  return await res.json();
};
