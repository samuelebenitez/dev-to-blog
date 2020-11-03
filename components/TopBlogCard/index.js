import style from "../BlogCard/style.module.scss";
import Link from "next/link";
import like from "../../public/like.svg";
import comments from "../../public/comment.svg";

function TopBlogCard({ art }) {
  return (
    <div className={style.article_container}>
      <div className={style.img_container}>
        <img className={style.article_img} src={art.cover_image} alt="" />
      </div>
      <div className={style.writer}>
        <img className={style.writer_pic} src={art.user.profile_image} alt="" />

        <p className={style.writer_name}>{art.user.name}</p>
      </div>
      <div className={style.info}>
        <p className={style.article_date}>{art.readable_publish_date}</p>
        <Link href={`/post/${art.id}`}>
          <h1 className={style.title} title="Ir a la publicación">
            {art.title}
          </h1>
        </Link>
        <p>
          {art.tag_list.map((t, key) => (
            <span key={key} className={style.tag}>
              #{t}
            </span>
          ))}
        </p>
      </div>
      <div className={style.comments_box}>
        <p className={style.comments}>
          <img className={style.coment_icon} src={comments} alt="" />
          {art.comments_count}{" "}
          <span className={style.text_hidden}>comments</span>
        </p>
        <p className={style.reactions}>
          <img className={style.like} src={like} alt="" />{" "}
          {art.public_reactions_count}{" "}
          <span className={style.text_hidden}>reactions</span>
        </p>
        <button className={style.save_button}>Save</button>
      </div>
    </div>
  );
}

export default TopBlogCard;
