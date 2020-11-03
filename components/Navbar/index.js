import style from "./style.module.scss";
import logo from "../../public/logo.png";
import Link from "next/link";
import Floatbar from "../Floatbar";
import { burguer } from "../../public/icons-svg.js";

function Navbar({ handleChange, searchInput, onKeyPress, showInput }) {
  return (
    <div className={style.nav_container}>
      <nav className={style.nav}>
        <div className={style.nav1}>
          <Link href="/">
            <img src={logo} className={style.nav_logo} />
          </Link>
          {showInput && (
            <input
              type="text"
              value={searchInput}
              className={style.nav_input}
              onKeyPress={onKeyPress}
              placeholder="Search..."
              onChange={(e) => handleChange(e)}
            />
          )}
        </div>
        <div className={style.nav2}>
          <span className={style.burguer}>
            {burguer}
            <div className={style.floatbar}>
              <Floatbar />
            </div>
          </span>
          <p className={style.log_in}>Log in</p>
          <button className={style.create}>Create account</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
