import { useState, useEffect } from "react";
const query = `
    {
      user(username: "Ratishjain") {
        publication {
          posts{
            slug
            title
            brief
            coverImage
          }
        }
      }
    }
  `;
const Blogs = () => {
  const [articles, setArticles] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("https://api.hashnode.com", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const ApiResponse = await response.json();

    console.log(ApiResponse.data.user.publication.posts);
    setArticles(ApiResponse.data.user.publication.posts);
    console.log(articles);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="p-12" id="blogs">
      <h1 className="text-center text-3xl mb-2">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 ">
        {articles.map((article) => (
          <div
            key={article._id}
            className="cursor-pointer bg-gray-800 m-4 flex  flex-col gap-1 p-2 rounded-sm"
          >
            <img src={article.coverImage} className="rounded-sm" />
            <div className="flex flex-col justify-evenly gap-1 h-full">
              <h2 className="text-lg font-bold">{article.title}</h2>
              <p className="text-xs opacity-40">{article.brief}</p>
              <p>
                <a
                  href={`https://devcon.hashnode.dev/${article.slug}`}
                  className="text-gray-400 text-lg flex-end"
                >
                  Read more...
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blogs;
