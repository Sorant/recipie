import React from 'react';
import { connect } from 'react-redux';
import Dish from './Dish/Dish';
import moduleStyles from './DishList.module.scss';

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

const DishList = (props) => {
  const { recipes } = props;
  const Dishes = recipes.map((item, index) => { return <Dish key={`${item.name}-${index}`} imgUrl={item.imgUrl} name={item.name} time={item.time} likes={item.likes} /> })
  return (
    <div className={moduleStyles.dishList}>
      { Dishes}
    </div>
  )
}

export default connect(mapStateToProps)(DishList);