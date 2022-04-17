import style from "./Main.module.css";
import CardGraphics from "../CardGraphics/CardGraphics";

import { useEffect, useState } from "react";

import {
  dateToLocal,
  yestardateToLocal,
  requestDate,
} from "../../Services/constants";
import { getApi, getApiDate } from "../../Services/getApi";

const Main = () => {
  const [currencies, setCurrencies] = useState(null);

  const getResponse = async () => {
    const res = await getApi();
    const resYestarday = await getApiDate(requestDate);

    const currenciesResYestarday = resYestarday.map((elem) => {
      return elem.rate;
    });

    const currenciesRes = res.map((elem, index) => {
      return {
        currency: elem.txt,
        value: elem.rate,
        id: elem.r030,
        difference: (
          (elem.rate / currenciesResYestarday[index]) * 100 -
          100
        ).toFixed(2),
        data: [
          {
            dateCur: yestardateToLocal,
            value: currenciesResYestarday[index],
          },
          { dateCur: dateToLocal, value: elem.rate },
        ],
      };
    });

    /*  const unityRes = currenciesRes.map((item, index) => ({
      ...item,
      valueYestarday: currenciesResYestarday[index],
      difference: (
        (item.value / currenciesResYestarday[index]) * 100 -
        100
      ).toFixed(2),
    })); */

    /* const { UAH, EUR, RUB, BYN, PLN, KZT } = res.conversion_rates;
    console.log(UAH, EUR, RUB, BYN, PLN, KZT);

    const currenciesRes = [
      { currency: "UAH", value: UAH },
      { currency: "EUR", value: EUR },
      { currency: "RUB", value: RUB },
      { currency: "BYN", value: BYN },
      { currency: "PLN", value: PLN },
      { currency: "KZT", value: KZT },
    ];
 */
    /* setCurrencies(currenciesRes); */

    setCurrencies(currenciesRes);
  };

  useEffect(() => {
    getResponse();
  }, []);
  console.log(currencies);
  return (
    <div className={style.cardconteiner}>
      {currencies && <CardGraphics currencies={currencies} />}
    </div>
  );
};

export default Main;
