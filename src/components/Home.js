import React, {useState} from 'react';
import FoodCard from './FoodCard';
import { FoodList as foodList } from './FoodList';

const Home = ({ favoritesList, setfavoritesList }) => {
  const [searchText, setSearchText] = useState('')
  const updatedfoodList = foodList.filter((item) => 
  item.name.toLowerCase().includes(searchText.trim().toLowerCase())
  )

  return (
    <div>
      <h1>Home</h1>

      <div>
        <input type='text' 
          placeholder='Seach any food'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          >
          </input>
      </div>

      {updatedfoodList.map((item) => (
        <FoodCard
          key={item.name}
          item={item}
          favoritesList={favoritesList}
          setfavoritesList={setfavoritesList}
        />
      ))}
    </div>
  );
};

export default Home;
