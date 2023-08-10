import { useErrorBoundary } from "react-error-boundary";

import img from "../../Icons/Franclin_ErrorFallback.jpg";
import style from "./style.module.css";

const ErrorFallback = ({ error }) => {
  const { resetBoundary } = useErrorBoundary();
  return (
    <div className={style.container}>
      <img className={style.img} src={img} alt="Not Found" />
      <p className={style.text}>Франклин в ужасе. Сайт сломался!</p>
      <p className={style.text}>{error}</p>
      <button className={style.container__error_button} onClick={resetBoundary}>
        Попробовать починить
      </button>
    </div>
  );
};

export { ErrorFallback };
