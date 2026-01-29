import React, { useEffect } from 'react';

const FoodCard = ({ item, favoritesList, setfavoritesList }) => {
  const isFavorite = favoritesList.some((fav) => fav.name === item.name);

  const handleAdd = () => {
    setfavoritesList([...favoritesList, item]);
  };

  useEffect(() => {}, [favoritesList]);

  return (
    <div>
      <span className="text-lg font-bold">{item.name}</span>
      <span className="text-lg font-bold">₹{item.price}</span>
      {!isFavorite && (
          <button onClick={handleAdd} className="rounded-xl px-4">
            Add
          </button>
        )}
      <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>

      <div className="flex items-center justify-between pt-2">
        

      </div>
    </div>
  );
};

export default FoodCard;
