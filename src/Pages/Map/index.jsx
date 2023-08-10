import style from "./style.module.css";

const Map = () => {
  return (
    <div className={style.container}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3489.6377738051265!2d30.487924840193394!3d50.46249646995681!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce79728fffff%3A0xea52058a78030e6b!2z0KHQuNC70YzQv9C-!5e0!3m2!1sru!2sua!4v1650728278588!5m2!1sru!2sua"
        width="100%"
        height="100%"
        title="Map"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export { Map };
