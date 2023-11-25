import { useState, useEffect } from "react";
const query = `
  query Publication {
   publication(host: "devcon.hashnode.dev") {
    isTeam
    title
    posts(first: 9) {
      edges {
        node {
          id
          title
          brief
          url
          coverImage {
            url
          }
        }
      }
    }
  }
}
  `;
const Blogs = () => {
  const [articles, setArticles] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("https://gql.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const ApiResponse = await response.json();
    setArticles(ApiResponse.data.publication.posts.edges);
    console.log("articles", articles);
    console.log(ApiResponse);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="p-12 min-w-[300px]" id="blogs">
      <h1 className="text-center text-3xl mb-2">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 ">
        {articles.map((article, index) => (
          <div
            key={index}
            className="cursor-pointer bg-gray-800 m-4 flex  flex-col gap-1 p-2 rounded-sm"
          >
            <img src={article.node.coverImage.url} className="rounded-sm" />
            <div className="flex flex-col justify-evenly gap-1 h-full">
              <h2 className="text-lg font-bold">{article.node.title}</h2>
              <p className="text-xs opacity-40">{article.node.brief}</p>
              <p>
                <a
                  href={`${article.node.url}`}
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
