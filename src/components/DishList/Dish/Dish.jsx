import React from 'react';

const Dish = ({ name, imgUrl, time, likes }) => {
  return (
    <div>
      <img src={imgUrl} alt={name} />
      <p>Name: {name}</p>
      <p>Time: {time}</p>
      <p>Likes: {likes}</p>
    </div>
  )
}

export default Dish;