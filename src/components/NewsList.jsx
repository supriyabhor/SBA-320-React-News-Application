import React from 'react';

const NewsList = ({ news, onArticleSelect }) => {
  return (
    <div className='news-list'>
      <h1>News List</h1>
      <ul>
        {news.map((article, index) => (
          <li key={`${article.title}_${index}`}>
            <img src={article.image_url} alt={article.title} />
            <p><b>{article.pubDate}</b></p>
            {/* <h2>{article.title}</h2> */}
            <p>{article.description}</p>
            <p>Source: {article.source_name}</p>
           <a href={article.link}></a>
            <button onClick={() => onArticleSelect(article)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
