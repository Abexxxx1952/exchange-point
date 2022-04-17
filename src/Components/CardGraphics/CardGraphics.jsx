import style from "./CardGraphics.module.css";
import Graphic from "../Graphic/Graphic";

const CardGraphics = ({ currencies }) => {
  const dataa = [
    {
      dateCur: "Date A",
      Currensic: 4000,
    },
    {
      dateCur: "Date B",
      Currensic: 3000,
    },
  ];

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
                <Graphic data={data} />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CardGraphics;
