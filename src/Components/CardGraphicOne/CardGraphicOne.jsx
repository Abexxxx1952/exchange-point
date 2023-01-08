import React from "react";
import { useNavigate } from "react-router-dom";
import { GraphicRechart } from "../Graphic/GraphicRechart";
import { GraphicNivo } from "../Graphic/GraphicNivo";

import style from "./CardGraphicOne.module.css";

const CardGraphicOne = ({
  currency,
  value,
  id,
  dataRechart,
  dataNivo,
  difference,
  cc,
  switched,
}) => {
  const navigate = useNavigate();
  const cardClick = (cc) => {
    navigate(`/graphicOneValute${cc}`);
  };

  return (
    <div
      className={style.card}
      onClick={() => {
        cardClick(cc);
      }}
    >
      <div className={style.card__header}>
        <div>{currency}</div>

        <p>24h</p>
      </div>
      <div className={style.card__value}>
        <h3>{value}</h3>
        <span> {difference} %</span>
      </div>
      <div className={style.card__graphic}>
        {switched
          ? dataRechart && <GraphicRechart data={dataRechart} />
          : dataNivo && <GraphicNivo data={dataNivo} />}
      </div>
    </div>
  );
};

export { CardGraphicOne };
