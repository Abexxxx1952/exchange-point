import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { GraphicChartJS } from "../Graphic/GraphicChartJS";

import { getApiDateCurrencie } from "../../Services/getApi";
import { API_URL_GOV_DATE_CURRENCIS } from "../../Services/constants";
import DayLeft from "../../Services/DayLeft";

import style from "./GraphicOneValute.module.css";

const GraphicOneValute = () => {
  let { cc } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const [data, setData] = useState();

  const getResponse = async () => {
    const resFive = await getApiDateCurrencie(DayLeft(5), cc);
    const resFour = await getApiDateCurrencie(DayLeft(4), cc);
    const resThree = await getApiDateCurrencie(DayLeft(3), cc);
    const resTwo = await getApiDateCurrencie(DayLeft(2), cc);
    const resOne = await getApiDateCurrencie(DayLeft(1), cc);
    const resZero = await getApiDateCurrencie(DayLeft(0), cc);

    console.log(API_URL_GOV_DATE_CURRENCIS(DayLeft(1), cc));
    console.log(DayLeft(3)[1]);
    console.log(DayLeft(3)[0]);
    console.log(resOne[0]);

    const labels = [
      resFive[0].exchangedate,
      resFour[0].exchangedate,
      resThree[0].exchangedate,
      resTwo[0].exchangedate,
      resOne[0].exchangedate,
      resZero[0].exchangedate,
    ];

    const oneCurr = {
      labels,
      title: resOne[0].txt,
      datasets: [
        {
          data: [
            resFive[0].rate,
            resFour[0].rate,
            resThree[0].rate,
            resTwo[0].rate,
            resOne[0].rate,
            resZero[0].rate,
          ],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };

    console.log(labels);

    setData(oneCurr);
  };

  useEffect(() => {
    getResponse();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.link__conteiner}>
        <div onClick={goBack}>Назат в прошлое</div>
      </div>
      <div className={style.graphicCharConteiner}>
        {data && <GraphicChartJS data={data} />}
      </div>
    </div>
  );
};

export { GraphicOneValute };
