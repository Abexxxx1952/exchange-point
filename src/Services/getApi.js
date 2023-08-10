import {
  API_URL_GOV,
  API_URL_GOV_DATE,
  API_URL_GOV_DATE_CURRENCIES,
} from "./constants";

export const getApi = async () => {
  try {
    const response = await fetch(API_URL_GOV);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getApiDate = async (date) => {
  try {
    const response = await fetch(API_URL_GOV_DATE(date));
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getApiDateCurrency = async (date, cur) => {
  try {
    const response = await fetch(API_URL_GOV_DATE_CURRENCIES(date, cur));
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
