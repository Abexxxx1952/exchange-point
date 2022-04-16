import { API_URL_GOV, API_URL_GOV_DATE } from "./constants";

export const getApi = async () => {
  const res = await fetch(API_URL_GOV);
  return await res.json();
};

export const getApiDate = async (date) => {
  const res = await fetch(API_URL_GOV_DATE(date));
  return await res.json();
};
