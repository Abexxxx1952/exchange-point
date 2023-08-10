import { useNavigate } from "react-router-dom";
import { GraphicRechart } from "../Graphic/GraphicRechart";
import { GraphicNivo } from "../Graphic/GraphicNivo";

import style from "./style.module.css";

const CardGraphicOne = ({
  currency,
  value,
  dataRechart,
  dataNivo,
  difference,
  currentCurrency,
  switched,
}) => {
  const navigate = useNavigate();
  const cardClick = (currentCurrency) => {
    navigate(`/graphicOneValuta/${currentCurrency}`);
  };

  return (
    <div
      className={style.card}
      onClick={() => {
        cardClick(currentCurrency);
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
