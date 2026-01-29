import React from 'react';
import FoodCard from './FoodCard';
import { FoodList as foodList } from './FoodList';

const Home = ({ favoritesList, setfavoritesList }) => {
  return (
    <div>
      <h1>Home</h1>

      {foodList.map((item) => (
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
