import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DishOverview from './DishOverview/DishOverview';
import moduleStyles from './DishList.module.scss';
import Dish from './../Dish/Dish';

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

const DishList = (props) => {
  const { recipes } = props;
  const Dishes = recipes.map((item, index) => { return <DishOverview key={`${item.name}-${index}`} id={item.name} imgUrl={item.imgUrl} name={item.name} time={item.time} likes={item.likes} /> })
  return (
    <div className={moduleStyles.dishList}>
      <Router>
        <Switch>
          <Route exact path={`/home/dishes/:dishId`} render={(props) => <Dish {...props} />}></Route>
          <Route path='/home'>
            {Dishes}
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default connect(mapStateToProps)(DishList);