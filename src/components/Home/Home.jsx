import React, { useState, useEffect } from 'react';
import app from './../../firebase/base';
import Aside from './../Aside/Aside';
// import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import DishList from './../DishList/DishList';
import firebase from 'firebase/app';
import { firestore } from 'firebase/firestore';
import { connect } from 'react-redux';
const db = firebase.firestore();

const mapStateToProps = (state, ownProps) => {
  return {
    recipes: state.recipes
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getData: (data) => {
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
  console.log(props);
  useEffect(() => {
    db.collection('All').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        props.getData(doc.data());
      })
    })
  }, [])

  if (!data) {
    return (
      <>Loading...</>
    )
  }
  else {
    console.log({ data });
    return (
      <div>
        <div>
          Welcome home,
        <button onClick={() => app.auth().signOut()}>Sign out</button>
        </div>
        <Aside />
        <DishList />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);