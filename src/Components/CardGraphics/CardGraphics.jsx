import style from "./CardGraphics.module.css";
import GraphicRechart from "../Graphic/GraphicRechart";
import GraphicNivo from "../Graphic/GraphicNivo";
import InputSearch from "../InputSearch/InputSearch";
import CheckBox from "../CheckBox/CheckBox";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLazyScrollLoading from "../../Services/useLazyScrollLoading";

import useAutocomplete from "../../Services/useAutocomplete";

const CardGraphics = ({ currencies, switched, setSwitched }) => {
  const [inputValue, setInputValue] = useState("");

  const filteredCurrencies = useAutocomplete(inputValue, currencies);

  const initialMaxCount = 12;
  const addStep = 6;

  const [refContainer, maxCount] = useLazyScrollLoading(
    initialMaxCount,
    currencies.length,
    addStep
  );
  refContainer.current = window.document;

  const [currenciesSliced, setCurrenciesSliced] = useState(
    filteredCurrencies.slice(0, maxCount)
  );

  useEffect(() => {
    setCurrenciesSliced(filteredCurrencies.slice(0, maxCount));
  }, [maxCount, currencies, inputValue]);

  let navigate = useNavigate();

  const cardClick = (cc) => {
    navigate(`/graphicOneValute${cc}`);
  };

  return (
    <div className={style.body}>
      <div className={style.inputsearch__conteiner}>
        <InputSearch
          inputValue={inputValue}
          setInputValue={setInputValue}
          currencies={currencies}
        />
      </div>
      <div className={style.checkbox__conteiner}>
        <CheckBox switched={switched} setSwitched={setSwitched} />
      </div>

      <div className={style.card__conteiner}>
        {currenciesSliced.map(
          ({ currency, value, id, dataRechart, dataNivo, difference, cc }) => (
            <div className={style.card__under}>
              <div
                className={style.card}
                key={id}
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
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CardGraphics;
