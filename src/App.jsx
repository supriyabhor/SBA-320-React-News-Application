import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import NewsList from './components/NewsList';
import NewsArticle from './components/NewsArticles';
import SearchForm from './components/SearchForm';
import './App.css';

function App() {
  const [news, setNews] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('pizza');
  const [region, setRegion] = useState('');
  const API_KEY = 'pub_70208a656065d4f9974711e72e2faca08bb12';

  useEffect(() => {
    const fetchNews = async () => {
      const API_URL = region
        ? `https://newsdata.io/api/1/latest?apikey=${API_KEY}&country=${region}`
        : `https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=${searchTerm}`;
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log('News Data:', data);
      setNews(data.results);
    };
    const timeoutId = setTimeout(fetchNews, 1000);
    return () => clearTimeout(timeoutId);
  }, [searchTerm, region]);

  const handleArticleSelect = (article) => {
    setSelectedArticle(article);
  };

  const handleSearchSubmit = (term) => {
    setSearchTerm(term);
    setRegion('');
  };

  const handleRegionChange = (region) => {
    setRegion(region);
    setSearchTerm('');
  };

  return (
  
      <div>
        <h1>News Data</h1>
        <div className='btn-container'>
     
     <button onClick={() => handleRegionChange('au')}>Australia</button>
     <button onClick={() => handleRegionChange('in')}>India</button>
     <button onClick={() => handleRegionChange('fr')}>France</button>
       <button onClick={() => handleRegionChange('de')}>Germany</button>
       <button onClick={() => handleRegionChange('jp')}>Japan</button>
       <button onClick={() => handleRegionChange('mx')}>Mexico</button>
       <button onClick={() => handleRegionChange('us')}>USA</button>
     <button onClick={() => handleRegionChange('ca')}>Canada</button>
     <button onClick={() => handleRegionChange('gb')}>UK</button>
       <button onClick={() => handleRegionChange('br')}>Brazil</button>
       <button onClick={() => handleRegionChange('za')}>South Africa</button>
         <button onClick={() => handleRegionChange('kr')}>South Korea</button>
   </div>

        <SearchForm onSearchSubmit={handleSearchSubmit} />
        
        <Routes>
          <Route
            path="/"
            element={
              <NewsList news={news} onArticleSelect={handleArticleSelect} />
            }
          />
          <Route
            path="/article/:title"
            element={<NewsArticle article={selectedArticle} />}
          />
        </Routes>
      </div>
   
  );
}

export default App;