import style from "./style.module.scss";
import {
  signup,
  listings,
  videos,
  podcast,
  tags,
} from "../../public/icons-svg.js";

export default function Sidebar() {
  const buttonsName = [
    {
      label: "Sign In/Up",
      icon: signup,
    },
    {
      label: "Listings",
      icon: listings,
    },
    {
      label: "Videos",
      icon: videos,
    },
    {
      label: "Podcasts",
      icon: podcast,
    },
    {
      label: "Tags",
      icon: tags,
    },
    {
      label: "More...",
      icon: null,
    },
  ];

  return (
    <div className={style.sidebar_container}>
      {buttonsName.map((button, key) => (
        <a className={style.sidebar_button} key={key} href="">
          <span className={style.sidebar_icon}>{button.icon}</span>
          {button.label}
        </a>
      ))}
    </div>
  );
}
