import { useLocation } from "react-router-dom";
import img from "../../icons/Franclin_NotFoundPage.jpg";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <img className={styles.img} src={img} alt="Not Found" />
      <p className={styles.text}>
        Axa-xa, Франклин не знает где это "<u>{location.pathname}</u>"
      </p>
    </div>
  );
};

export { NotFoundPage };
