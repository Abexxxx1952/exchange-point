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
      id: "japan",
      color: "hsl(309, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 128,
        },
        {
          x: "helicopter",
          y: 148,
        },
        {
          x: "boat",
          y: 230,
        },
        {
          x: "train",
          y: 249,
        },
        {
          x: "subway",
          y: 158,
        },
        {
          x: "bus",
          y: 234,
        },
        {
          x: "car",
          y: 259,
        },
        {
          x: "moto",
          y: 91,
        },
        {
          x: "bicycle",
          y: 143,
        },
        {
          x: "horse",
          y: 9,
        },
        {
          x: "skateboard",
          y: 143,
        },
        {
          x: "others",
          y: 27,
        },
      ],
    },
  ];
  const dataa = [
    {
      id: "Австралійський долар",
      color: "hsl(185°, 82%, 56%)",
      data: [
        {
          x: "15.04.2022",
          y: 21.7686,
        },
        {
          x: "16.04.2022",
          y: 21.8183,
        },
      ],
    },
  ];

  const [currencies, setCurrencies] = useState(null);

  const getResponse = async () => {
    const res = await getApi();
    const resYestarday = await getApiDate(requestDate);

    const currenciesResYestarday = resYestarday.map((elem) => {
      return elem.rate;
    });

    const currenciesRes = res.map((elem, index) => {
      return {
        id: elem.txt,
        color: "hsl(185°, 82%, 56%)",
        data: [
          {
            x: yestardateToLocal,
            y: currenciesResYestarday[index],
          },
          {
            x: dateToLocal,
            y: elem.rate,
          },
        ],
      };
    });

    console.log(currenciesRes);
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
    <div className={style.container}>
      {currencies & <Graphic data={currencies} />}
    </div>
  );
};

export default GraphicOneValute;
