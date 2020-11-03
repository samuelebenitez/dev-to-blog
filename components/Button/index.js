import style from "./style.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Button({ type, href, label }) {
  const router = useRouter();

  switch (type) {
    case "tab":
      if (router.asPath == href) {
        return (
          <Link href={href}>
            <p className={style.selected}>{label} </p>
          </Link>
        );
      } else {
        return (
          <Link href={href}>
            <p className={style.postbar_button}>{label} </p>
          </Link>
        );
      }
    case "sidebar_button":
      return <button>{label}</button>;
  }
}
