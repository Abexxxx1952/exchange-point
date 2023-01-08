import { useState, useEffect, forwardRef } from "react";
import { useNavigate } from "react-router-dom";

import { InputSearch } from "../InputSearch/InputSearch";
import { CheckBox } from "../CheckBox/CheckBox";
import { CardGraphicOne } from "../CardGraphicOne/CardGraphicOne";
import useLazyScrollLoading from "../../Services/useLazyScrollLoadingIntersectionObserver";
import useAutocomplete from "../../Services/useAutocomplete";

import style from "./CardGraphics.module.css";

const CardGraphics = ({ currencies, switched, setSwitched }) => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const filteredCurrencies = useAutocomplete(inputValue, currencies);

  const initialMaxCount = 12;
  const addStep = 6;

  const [refContainer, maxCount] = useLazyScrollLoading(
    initialMaxCount,
    currencies.length,
    addStep
  );

  const [currenciesSliced, setCurrenciesSliced] = useState(
    filteredCurrencies.slice(0, maxCount)
  );

  useEffect(() => {
    setCurrenciesSliced(filteredCurrencies.slice(0, maxCount));
  }, [maxCount, currencies, inputValue]);

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
        {currenciesSliced.map((elem, index) => {
          if (currenciesSliced.length === index + 1) {
            return (
              <div
                className={style.card__under}
                key={elem.id}
                ref={refContainer}
              >
                <CardGraphicOne
                  currency={elem.currency}
                  value={elem.value}
                  id={elem.id}
                  dataRechart={elem?.dataRechart}
                  dataNivo={elem?.dataNivo}
                  difference={elem.difference}
                  cc={elem.cc}
                  switched={switched}
                />
              </div>
            );
          }
          return (
            <div className={style.card__under} key={elem.id}>
              <CardGraphicOne
                currency={elem.currency}
                value={elem.value}
                id={elem.id}
                dataRechart={elem?.dataRechart}
                dataNivo={elem?.dataNivo}
                difference={elem.difference}
                cc={elem.cc}
                switched={switched}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { CardGraphics };
