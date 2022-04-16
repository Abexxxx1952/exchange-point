import style from "./CardGraphics.module.css";
import Graphic from "../Graphic/Graphic";

const CardGraphics = ({
  currency,
  value,
  valueYestarday,
  id,
  date,
  yestarday,
  difference,
}) => {
  return (
    <div className={style.card} key={id}>
      <div className={style.card__header}>
        <div>{currency}</div>

        <p>24h</p>
      </div>
      <div className={style.card__value}>
        <h3>{value}</h3>
        <span> {difference} %</span>
      </div>
      <div className={style.card__graphic}>
        {/* <Graphic
          value={value}
          valueYestarday={valueYestarday}
          date={date}
          yestarday={yestarday}
        /> */}
      </div>
    </div>
  );
};

export default CardGraphics;
