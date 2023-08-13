import { useLocation } from "react-router-dom";
import img from "../../Icons/Franclin_NotFoundPage.jpg";
import styles from "./styles.module.css";

const NotFoundPage = () => {
  const location = useLocation();

  return (
    <main className={styles.container}>
      <img className={styles.img} src={img} alt="Not Found" />
      <p className={styles.text}>
        Axa-xa, Франклин не знает где это "<u>{location.pathname}</u>"
      </p>
    </main>
  );
};

export { NotFoundPage };
