import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { GraphicChartJS } from "../../Components/Graphic/GraphicChartJS";

import { getApiDateCurrency } from "../../Services/getApi";

import { DayLeft } from "../../Services/DayLeft";

import style from "./style.module.css";

const GraphicOneValuta = () => {
  const { currentCurrency } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const [data, setData] = useState();

  const getResponse = useCallback(async () => {
    const resFive = await getApiDateCurrency(DayLeft(5), currentCurrency);
    const resFour = await getApiDateCurrency(DayLeft(4), currentCurrency);
    const resThree = await getApiDateCurrency(DayLeft(3), currentCurrency);
    const resTwo = await getApiDateCurrency(DayLeft(2), currentCurrency);
    const resOne = await getApiDateCurrency(DayLeft(1), currentCurrency);
    const resZero = await getApiDateCurrency(DayLeft(0), currentCurrency);

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

    setData(oneCurr);
  }, [currentCurrency]);

  useEffect(() => {
    getResponse();
  }, [getResponse]);

  return (
    <div className={style.container}>
      <div className={style.link__container}>
        <div onClick={goBack}>Назат в прошлое</div>
      </div>
      <div className={style.graphicChar__container}>
        {data && <GraphicChartJS data={data} />}
      </div>
    </div>
  );
};

export { GraphicOneValuta };
