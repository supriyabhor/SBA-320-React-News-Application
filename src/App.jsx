import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NewsList from './components/NewsList';
import NewsArticle from './components/NewsArticles';
import SearchForm from './components/SearchForm';

import './App.css';

function App() {
  const API_KEY = 'pub_70208a656065d4f9974711e72e2faca08bb12';
  const [news, setNews] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('pizza');

  useEffect(() => {
    const fetchNews = async () => {
      const API_URL = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=${searchTerm}`;
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log('News Data:', data);
      setNews(data.results);
    };
    const timeoutId = setTimeout(fetchNews, 1000); 
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const handleArticleSelect = (article) => {
    setSelectedArticle(article);
  };

  const handleSearchSubmit = (term) => {
    setSearchTerm(term);
  };

  return (

      <div>
        <h1>News Data</h1>
        <SearchForm onSearchSubmit={handleSearchSubmit} />
        <Routes>
          <Route path="/" element={<NewsList news={news} onArticleSelect={handleArticleSelect} />} />
          <Route path="/article/:title" element={<NewsArticle article={selectedArticle} />} />
        </Routes>
      </div>
   
  );
}

export default App;



