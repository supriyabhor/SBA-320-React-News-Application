import React from 'react';

const NewsArticle = ({ article }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <p>Source: {article.source}</p>
      <p>{article.content}</p>
    </div>
  );
};

export default NewsArticle;