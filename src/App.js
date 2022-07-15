import './App.css';
import { getShips } from './services/swApi';
import { useState, useEffect } from 'react';
import Starship from './components/Starship';

function App() {

  const [starships, getStarships] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await getShips()
      getStarships(response)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      {
        starships.map((ship, index) => {
          return <Starship name={ship.name} key={index}/>
        })
      }
    </div>
  );
}

export default App;
