import img from "../../icons/Franclin_ErrorFallback.jpg";
import styles from "./ErrorFallback.module.css";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  console.log(error);
  return (
    <div className={styles.container}>
      <img className={styles.img} src={img} alt="Not Found" />
      <p className={styles.text}>Франклин в ужасе. Сайт сломался!</p>
    </div>
  );
};

export { ErrorFallback };
