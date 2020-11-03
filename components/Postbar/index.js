import style from "./style.module.scss";
import Button from "../Button";
import { useRouter } from "next/router";

export default function Postbar({ searchInput }) {
  const router = useRouter();
  const buttonsName = [
    { name: "Feed", path: "/" },
    { name: "Week", path: "/top/week" },
    { name: "Month", path: "/top/month" },
    { name: "Year", path: "/top/year" },
    { name: "Infinity", path: "/top/infinity" },
    { name: "Latest", path: "/top/latest" },
  ];

  function handleChange(e) {
    router.push(e);
  }
  return (
    <div className={style.postbar_container}>
      <h2 className={style.postbar_title}>Posts</h2>
      <div className={style.postbar_select_container}>
        <select
          onChange={(e) => handleChange(e.target.value)}
          className={style.postbar_select}
          name=""
          id=""
        >
          {buttonsName.map((b, key) => (
            <option key={key} value={b.path}>
              {b.name}
            </option>
          ))}
        </select>
      </div>
      <div className={style.postbar_buttons}>
        {buttonsName.map((b, key) => (
          <Button key={key} type="tab" href={b.path} label={b.name} />
        ))}
      </div>
    </div>
  );
}
