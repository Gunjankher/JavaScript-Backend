import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching jokes:', error);
      });
  }, []);
  

  return (
    <>
     <h1>My Fullstack Application</h1>
      <p>Jokes: {jokes.length}</p>

      {/* Check if jokes is an array before using forEach */}
      {Array.isArray(jokes) && jokes.map((joke, index) => (
        <div key={joke.id}>
          <h1>{joke.title}</h1>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
