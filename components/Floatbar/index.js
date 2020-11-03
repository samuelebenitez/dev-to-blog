import style from "./style.module.scss";

export default function Floatbar() {
  return (
    <div className={style.floatbar_container}>
      <h1 className={style.h1}>
        DEV is a community of 493,035 amazing developers
      </h1>
      <p className={style.p}>
        We're a place where coders share, stay up-to-date and grow their
        careers.
      </p>
      <div className={style.buttons}>
        <button className={style.create}>Create new account</button>
        <button className={style.log}>Log in</button>
      </div>
    </div>
  );
}
