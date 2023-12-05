// NewsDetail.js
import React from 'react';

const NewsDetail = ({ article }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <img src={article.image} alt={article.title} />
      <a href={article.link} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
};

export default NewsDetail;
