import React from "react";
import Graphic from "../Graphic/Graphic";

import { useEffect, useState } from "react";

import {
  dateToLocal,
  yestardateToLocal,
  requestDate,
} from "../../Services/constants";
import { getApi, getApiDate } from "../../Services/getApi";

import style from "./GraphicOneValute.module.css";

const GraphicOneValute = () => {
  const data = [
    {
      dateCur: "Date A",
      Currensic: 4000,
    },
    {
      dateCur: "Date B",
      Currensic: 3000,
    },
  ];

  const [currencies, setCurrencies] = useState(null);

  const getResponse = async () => {
    const res = await getApi();
    const resYestarday = await getApiDate(requestDate);

    const currenciesResYestarday = resYestarday.map((elem) => {
      return elem.rate;
    });
    let totalres = [];
    res.forEach((elem, index) => {
      totalres.push({
        dateCur: yestardateToLocal,
        [elem.txt]: currenciesResYestarday[index],
      });

      totalres.push({ dateCur: dateToLocal, [elem.txt]: elem.rate });
    });

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

    setCurrencies(...totalres);
  };

  useEffect(() => {
    getResponse();
  }, []);

  return (
    <div className={style.container}>
      <Graphic data={data} />
    </div>
  );
};

export default GraphicOneValute;
