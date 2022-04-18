import style from "./CardGraphics.module.css";
import GraphicRechart from "../Graphic/GraphicRechart";
import GraphicNivo from "../Graphic/GraphicNivo";
import CheckBox from "../CheckBox/CheckBox";

const CardGraphics = ({ currencies, switched, setSwitched }) => {
  return (
    <div className={style.body}>
      <div className={style.row}>
        <div className={style.checkbox__conteiner}>
          <CheckBox switched={switched} setSwitched={setSwitched} />
        </div>
        {currencies.map(
          ({ currency, value, id, dataRechart, dataNivo, difference }) => (
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
                {switched ? (
                  <GraphicRechart data={dataRechart} />
                ) : (
                  <GraphicNivo data={dataNivo} />
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CardGraphics;
