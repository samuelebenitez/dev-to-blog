import ReactMarkdown from "react-markdown";
import style from "./style.module.scss";

export default function DynamicRoute({ data }) {
  console.log(data);
  const { title, body_markdown, cover_image, readable_publish_date } = data;
  const { name, profile_image } = data.user;

  return (
    <div className={style.body}>
      <div className={style.container}>
        <img className={style.art_img} src={cover_image} alt="" />

        <h1 className={style.title}>{title}</h1>
        <hr />
        <div className={style.author}>
          <img className={style.author_img} src={profile_image} alt="" />
          <p className={style.author_name}>{name}</p>
          <p className={style.date}>{readable_publish_date}</p>
        </div>
        <hr />
        <ReactMarkdown className={style.markdown}>
          {body_markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  const data = await res.json();
  return {
    props: {
      id: params.id,
      data: data,
    },
  };
}
