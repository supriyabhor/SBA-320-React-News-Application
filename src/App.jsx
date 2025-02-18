import { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import NewsList from './components/NewsList';
import NewsArticle from './components/NewsArticles';
import SearchForm from './components/SearchForm';
import './App.css';

function App() {
  const [news, setNews] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('pizza');
  const [region, setRegion] = useState('');
  const [countries, setCountries]= useState('');
  const API_KEY = 'pub_70208a656065d4f9974711e72e2faca08bb12';

  const countriesName = [
    { code: 'au', name: 'Australia' },
    { code: 'in', name: 'India' },
    { code: 'fr', name: 'France' },
    { code: 'de', name: 'Germany' },
    { code: 'jp', name: 'Japan' },
    { code: 'mx', name: 'Mexico' },
    { code: 'us', name: 'USA' },
    { code: 'ca', name: 'Canada' },
    { code: 'gb', name: 'UK' },
    { code: 'br', name: 'Brazil' },
    { code: 'za', name: 'South Africa' },
    { code: 'kr', name: 'South Korea' },
  ];


  useEffect(() => {
    const fetchCountries = async () => {
      const API_URL = `https://newsdata.io/api/1/countries?apikey=${API_KEY}`;
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log('Countries Data:', data);
      setCountries(data.results);
    };
    fetchCountries();
  }, []);

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
    <div className="btn-container">
      {countriesName.map((country) => (
        <button key={country.code} onClick={() => handleRegionChange(country.code)}>
          {country.name}
        </button>
      ))}
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