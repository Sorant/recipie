import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

const Dish = (props) => {
  const [dish, setDish] = useState(0);
  const { dishId } = props.match.params;
  const { recipes } = props;

  const ref = useRef();

  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
    }
    else {
      for (const recipe of recipes) {
        const name = recipe.name.split(' ').join('-').toLowerCase();
        if (name == dishId) {
          setDish(recipe);
        }
      }
    }
  });
  return (
    <>
      {dish ? (
        <p>Name: <span>{dish.name}</span></p>
      ) : <p>Loading...</p>
      }
    </>
  )
}

export default connect(mapStateToProps)(Dish);