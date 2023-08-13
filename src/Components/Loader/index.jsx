import style from "./style.module.css";

const Loader = () => {
  return (
    <main className={style.container}>
      <div className={style.spinner}>
        <div className={style.circle}>
          <span className={style.line}></span>
          <span className={style.line}></span>
          <span className={style.line}></span>
          <span className={style.line}></span>
        </div>
      </div>
    </main>
  );
};

export { Loader };
