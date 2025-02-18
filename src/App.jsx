import { useState , useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsList from './components/NewsList'


import './App.css'

function App() {
 
  const API_KEY = 'pub_70208a656065d4f9974711e72e2faca08bb12';
  // const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
  const API_URL = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=pizza`;
  
  const [news, setNews] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log('News Data:', data);
      setNews(data.articles);
    };
    fetchNews();
  }, []);


  return (
    <>
       <h1>New Data</h1>
       
    </>
  )
}

export default App
