import React, { useEffect, useState } from "react";
import "./News.css";

const News = () => {
  const [mynews, setMyNews] = useState([]);
  const [isGridView, setIsGridView] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=714ef9b8a6ef47d19b4bda6f4f0d100f"
      );
      const data = await response.json();
      setMyNews(data.articles);
    } catch (error) {
      console.error("Error fetching news articles:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleViewMode = () => {
    setIsGridView((prevMode) => !prevMode);
  };

  const toggleFavorite = (article) => {
    const isFavorited = favorites.some((fav) => fav.title === article.title);

    if (isFavorited) {
      setFavorites(favorites.filter((fav) => fav.title !== article.title));
    } else {
      setFavorites([...favorites, article]);
    }
  };

  return (
    <>
      <div className="favorite-list">
        {/* Three dots button to open the sidebar */}
        <button className="sidebar-toggle-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {/* You can use any icon or text for three dots */}
          <span>...</span>
        </button>
        {isSidebarOpen && (
          <div className="sidebar">
            <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>
              ✕
            </button>
            <h2>Favorite Articles</h2>
            <ul>
              {favorites.map((fav) => (
                <li key={fav.title} className="favorite-item">
                  <img
                    src={
                      fav.urlToImage ||
                      "https://kubrick.htvapps.com/vidthumb/f6865cb1-d77d-4a31-ba83-d57c4b2324d8/4b9c9d8f-ad14-47ea-bcf4-bf24ee0bb1f3.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*"
                    }
                    alt={fav.title}
                    className="favorite-image"
                  />
                  <div className="favorite-details">
                    <h3>{fav.title}</h3>
                    <p>{fav.description}</p>
                    <a href={fav.url} target="_blank" rel="noopener noreferrer">
                      Read More
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <h1 className="text-center my-3">Enjoy Daily Top - Headlines</h1>
      <button className="toggle-btn" onClick={toggleViewMode}>
        Toggle View: {isGridView ? "List" : "Grid"}
      </button>
      <div className={isGridView ? "grid-view" : "list-view"}>
        {mynews.map((ele) => {
          const isFavorited = favorites.some((fav) => fav.title === ele.title);

          return (
            <div key={ele.title} className={`card ${isGridView ? "grid-card" : ""}`}>
              <img
                src={
                  ele.urlToImage == null
                    ? "https://kubrick.htvapps.com/vidthumb/f6865cb1-d77d-4a31-ba83-d57c4b2324d8/4b9c9d8f-ad14-47ea-bcf4-bf24ee0bb1f3.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*"
                    : ele.urlToImage
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{ele.author === "" ? "Janelle Ash" : ele.author}</h5>
                <p className="card-text">{ele.title}</p>
                <a href={ele.url} target="_blank" className="btn btn-primary">
                  Read More
                </a>
                <button
                  className={`favorite-btn ${isFavorited ? "favorited" : ""}`}
                  onClick={() => toggleFavorite(ele)}
                >
                  ❤️
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default News;
