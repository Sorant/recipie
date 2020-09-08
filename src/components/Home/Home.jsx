import React, { useState, useEffect } from 'react';
import app from './../../firebase/base';
import Aside from './../Aside/Aside';
// import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import DishList from './../DishList/DishList';
import { createStore } from 'redux';
import myReducer from './../../reducers/myReducer';
import firebase from 'firebase/app';
import { firestore } from 'firebase/firestore';
import { connect } from 'react-redux';
const db = firebase.firestore();

const store = createStore(myReducer);

const Home = () => {
  const [data, updateData] = useState([]);
  const getData = (recipes) => {
    return {
      type: 'GET_RECIPES',
      recipes
    }
  }

  useEffect(() => {
    db.collection('All').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        store.dispatch(getData(doc.data()));
        // updateData(store.getState());
      })
    })
  })

  if (!store.getState()) {
    return (
      <>Loading...</>
    )
  }
  else {
    console.log(store.getState());
    return (
      <div>
        <div>
          Welcome home,
        <button onClick={() => app.auth().signOut()}>Sign out</button>
        </div>
        <Aside />
        <DishList data={store.getState()} />
      </div>
    )
  }
}

export default Home;