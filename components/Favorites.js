import React from 'react';
import FoodCard from './FoodCard';

const Favorites = ({ favoritesList, setfavoritesList }) => {
  console.log('favoritesList=', favoritesList);
  return (
    <div>
      {favoritesList.map((item) => {
        return (
          <FoodCard
            item={item}
            favoritesList={favoritesList}
            setfavoritesList={setfavoritesList}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
