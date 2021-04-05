import { useEffect, useState } from 'react';

import './App.css';

import { getAllStarships } from './services/sw-api';
import StarShipCard from './components/StarShipCard/StarShipCard';

function App() {

  const [starships, setStarships] = useState([]);

  useEffect(()=> {
    getAllStarships().then(result => {
      if (result.results)
      {
        setStarships(result.results);
      }
    })
  }, []);



  return (
    <>
      <header className="App-header">
        <h1>React Star Wars</h1>
      </header>
      <div className="starships-wrapper">
        {
          starships.map((item, index) => {
            return (
              <StarShipCard key={index} starship_name={item.name}></StarShipCard>
            );
          })
        }
      </div>
    </>
  );
}

export default App;
