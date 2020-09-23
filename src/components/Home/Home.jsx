import React, { useState, useEffect } from 'react';
import app from './../../firebase/base';
// import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import DishList from './../DishList/DishList';
import firebase from 'firebase/app';
import { firestore } from 'firebase/firestore';
import { connect } from 'react-redux';
import Aside from './../Aside/index';
const db = firebase.firestore();

const mapStateToProps = (state, ownProps) => {
  return {
    recipes: state.recipes
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAllData: (data) => {
      dispatch(getData(data));
    }
  }
}

const getData = (recipes) => {
  return {
    type: 'GET_RECIPES',
    recipes
  }
}

const Home = (props) => {
  const [data, updateData] = useState([]);
  const [category, updateCategory] = useState('Main-dishes');

  const chooseCategoryHandler = (choosenCategory) => {
    updateCategory(choosenCategory);
    db.collection('All').where('category', '==', `${choosenCategory}`).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        props.getAllData(doc.data());
      })
    });
    updateData(data => [...data, props.recipes]);
  }

  useEffect(() => {
    db.collection('All').where('category', '==', 'Soups').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        props.getAllData(doc.data());
      })
    });
    updateData(data => [...data, props.recipes]);
  }, []);

  if (!data) {
    return (
      <>Loading...</>
    )
  }
  else {
    return (
      <div>
        <div>
          Welcome home,
        <button onClick={() => app.auth().signOut()}>Sign out</button>
        </div>
        <Aside chooseCategoryHandler={chooseCategoryHandler} />
        <DishList recipes={props.recipes} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);