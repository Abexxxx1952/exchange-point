import { useEffect, useState, useCallback } from "react";

import { CardGraphics } from "../CardGraphics";
import { Loader } from "../../Components/Loader";

import { dateToLocal, yestardateToLocal } from "../../Services/constants";
import { getApi, getApiDate } from "../../Services/getApi";
import { DayLeft } from "../../Services/DayLeft";

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
          value: elem.rate.toFixed(3),
          id: elem.r030,
          cc: elem.cc,
          difference: (
            (elem.rate / currenciesResYestarday[index]) * 100 -
            100
          ).toFixed(2),
          dataRechart: [
            {
              dateCur: yestardateToLocal,
              value: currenciesResYestarday[index].toFixed(3),
            },
            { dateCur: dateToLocal, value: elem.rate.toFixed(3) },
          ],
        };
      }
      return {
        currency: elem.txt,
        value: elem.rate.toFixed(3),
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
                y: currenciesResYestarday[index].toFixed(3),
              },
              {
                x: dateToLocal,
                y: elem.rate.toFixed(3),
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

  if (!currencies) return <Loader />;
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
