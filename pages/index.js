import style from "./prueba.module.scss";
import { useState } from "react";
import BlogCard from "./../components/BlogCard";
import Navbar from "./../components/Navbar";
import Postbar from "./../components/Postbar";
import Sidebar from "./../components/Sidebar";
import TopBlogCard from "./../components/TopBlogCard";

export default function Prueba({ articles }) {
  const [searchInput, setSearchInput] = useState("");
  const [dataArticle, setDataArticle] = useState(articles);

  function handleChange(e) {
    const { value } = e.target;
    setSearchInput(value);
  }

  function handleKeyPress(e) {
    if (e.key == "Enter") {
      fetchData();
    }
  }
  async function fetchData() {
    const res = await fetch(
      `https://dev.to/api/articles?tag=${searchInput.toLocaleLowerCase()}&top=1`
    );
    const data = await res.json();
    console.log(data);
    setDataArticle(data);
    setSearchInput("");
  }

  return (
    <div className={style.body}>
      <Navbar
        showInput={true}
        handleChange={handleChange}
        searchInput={searchInput}
        onKeyPress={handleKeyPress}
      />
      <div className={style.sections_container}>
        <section className={style.sidebar_container}>
          <Sidebar />
        </section>
        <section className={style.articles_container}>
          <Postbar searchInput={searchInput} />
          {dataArticle.slice(0, 1).map((art) => (
            <TopBlogCard key={art.id} art={art} />
          ))}

          {dataArticle.slice(1, -1).map((art) => (
            <BlogCard key={art.id} art={art} />
          ))}
        </section>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://dev.to/api/articles");
  const data = await res.json();
  return {
    props: {
      articles: data,
    },
  };
}
