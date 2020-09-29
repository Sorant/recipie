import React from 'react';
import { Link } from 'react-router-dom';

const DishOverview = (props) => {
  const { name, imgUrl, time, likes, id } = props;
  const dishId = (id.split(' ').join('-')).toLowerCase();
  return (
    <Link to={`/home/dishes/${dishId}`}>
      <img src={imgUrl} alt={name} />
      <p>Name: {name}</p>
      <p>Time: {time}</p>
      <p>Likes: {likes}</p>
    </Link>
  )
}

export default DishOverview;