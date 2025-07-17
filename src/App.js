import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch cards from backend
    axios.get('http://localhost:5000/api/cards')
      .then((res) => {
        console.log('✅ API Response:', res.data);
        setCards(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('❌ API Error:', err);
        setError('Failed to load cards');
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="container">
      <h1>Our Team</h1>
      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card._id} data={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
