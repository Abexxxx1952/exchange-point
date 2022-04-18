import style from "./CardGraphics.module.css";
import GraphicRechart from "../Graphic/GraphicRechart";

const CardGraphics = ({ currencies }) => {
  return (
    <div className={style.body}>
      <div className={style.row}>
        {currencies.map(
          ({ currency, value, id, data, difference, elemcur }) => (
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
                <GraphicRechart data={data} />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CardGraphics;
