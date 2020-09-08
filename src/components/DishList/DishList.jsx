import React from 'react';

const DishList = ({ getData, data }) => {
  return (
    <div onClick={() => getData('Soups')}>
      Dish list
    </div>
  )
}

export default DishList;