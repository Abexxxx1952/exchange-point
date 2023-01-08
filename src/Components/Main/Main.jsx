import style from "./Main.module.css";
import { CardGraphics } from "../CardGraphics/CardGraphics";

import { useEffect, useState, useCallback } from "react";

import { dateToLocal, yestardateToLocal } from "../../Services/constants";
import { getApi, getApiDate } from "../../Services/getApi";
import DayLeft from "../../Services/DayLeft";

const Main = () => {
  const [currencies, setCurrencies] = useState(null);

  const [switched, setSwitched] = useState(true);

  const getResponsecСhart = useCallback(async () => {
    const res = await getApi();
    const resYestarday = await getApiDate(DayLeft(1));

    const currenciesResYestarday = resYestarday.map((elem) => {
      return elem.rate;
    });

    const currenciesRes = res.map((elem, index) => {
      if (switched) {
        return {
          currency: elem.txt,
          value: elem.rate,
          id: elem.r030,
          cc: elem.cc,
          difference: (
            (elem.rate / currenciesResYestarday[index]) * 100 -
            100
          ).toFixed(2),
          dataRechart: [
            {
              dateCur: yestardateToLocal,
              value: currenciesResYestarday[index].toFixed(2),
            },
            { dateCur: dateToLocal, value: elem.rate.toFixed(2) },
          ],
        };
      }
      return {
        currency: elem.txt,
        value: elem.rate,
        id: elem.r030,
        cc: elem.cc,
        difference: (
          (elem.rate / currenciesResYestarday[index]) * 100 -
          100
        ).toFixed(2),
        dataNivo: [
          {
            id: elem.txt,

            data: [
              {
                x: yestardateToLocal,
                y: currenciesResYestarday[index].toFixed(2),
              },
              {
                x: dateToLocal,
                y: elem.rate.toFixed(2),
              },
            ],
          },
        ],
      };
    });

    setCurrencies(currenciesRes);
  }, [switched]);

  useEffect(() => {
    getResponsecСhart();
  }, [getResponsecСhart]);

  return (
    <>
      {currencies && (
        <CardGraphics
          currencies={currencies}
          switched={switched}
          setSwitched={setSwitched}
        />
      )}
    </>
  );
};

export { Main };
