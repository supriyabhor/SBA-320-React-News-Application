import React from 'react';

const NewsList = ({ news, onArticleSelect }) => {
  return (
    <div>
      <h1>News List</h1>
      <ul>
        {news.map((article) => (
          <li key={article.title}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p>Source: {article.source}</p>
            <button onClick={() => onArticleSelect(article)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;