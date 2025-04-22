import RestaurantsContainer from "./components/RestaurantsContainer";
import {useState} from 'react';
import { restaurants } from "./data/data.js";
import "./App.css";

function App() {
  const [restaurantState, setRestaurants] = useState([...restaurants]);
  return (
    <div className="App">
      <RestaurantsContainer restaurants={restaurantState}/>
    </div>
  );
}

export default App;
