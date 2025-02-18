
import React from 'react';

const NewsList = ({ news, onArticleSelect }) => {
  return (
    <div className="news-list">
      <h1>News List</h1>
      <div className="news-articles">
        {news.map((article, index) => (
          <div key={`${article.title}_${index}`} className="news-article">
            <img src={article.image_url} alt={article.title} />
            <p>{article.description}</p>
            <p><b>{article.pubDate}</b></p>
            <p>Source: {article.source_name}</p>
            <p>Source URL: <a href={article.source_url} target="_blank" rel="noopener noreferrer">{article.source_name}</a></p>
            <button onClick={() => onArticleSelect(article)}>Select</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;