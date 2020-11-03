import Navbar from "../../components/Navbar";
import Postbar from "../../components/Postbar";
import BlogCard from "../../components/BlogCard";
import style from "../prueba.module.scss";
import Sidebar from "../../components/Sidebar";
import TopBlogCard from "../../components/TopBlogCard";

export default function DinamicArticules({ articles }) {
  return (
    <div className={style.body}>
      <Navbar showInput={false} />
      <div className={style.sections_container}>
        <section className={style.sidebar_container}>
          <Sidebar />
        </section>

        <section className={style.articles_container}>
          <Postbar />
          {articles.slice(0, 1).map((art) => (
            <TopBlogCard key={art.id} art={art} />
          ))}

          {articles.slice(1, -1).map((art) => (
            <BlogCard key={art.id} art={art} />
          ))}
        </section>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { time: "latest" } },
      { params: { time: "week" } },
      { params: { time: "month" } },
      { params: { time: "year" } },
      { params: { time: "infinity" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { time } = params;
  const getTime = (time) => {
    switch (time) {
      case "latest":
        return 1;
      case "week":
        return 7;
      case "month":
        return 30;
      case "year":
        return 365;
      case "infinity":
        return 900;

      default:
        break;
    }
  };

  const res = await fetch(
    `https://dev.to/api/articles?tag=react&top=${getTime(time)}`
  );
  const data = await res.json();
  return {
    props: {
      articles: data,
    },
  };
}
