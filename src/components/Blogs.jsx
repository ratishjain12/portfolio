import { useState, useEffect } from "react";

const Blogs = () => {
  const [articles, setArticles] = useState([]);
  const SECRET_KEY = `${import.meta.env.VITE_HASHNODE_API}`;
  console.log(SECRET_KEY);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.hashnode.com/v1/me/articles",
          {
            headers: {
              Authorization: SECRET_KEY,
            },
          }
        );
        const data = await response.json();
        setArticles(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <div key={article._id}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <p>
            <a href={article.url}>Read more</a>{" "}
          </p>
        </div>
      ))}
    </div>
  );
};
export default Blogs;
