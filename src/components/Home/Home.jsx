import React, { useState, useEffect } from 'react';
import app from './../../firebase/base';
import DishList from './../DishList/DishList';
import firebase from 'firebase/app';
import { firestore } from 'firebase/firestore';
import { connect } from 'react-redux';
import Aside from './../Aside/index';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import moduleStyles from './Home.module.scss';
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
    },
    clearAllData: () => {
      dispatch(clearData());
    }
  }
}

const getData = (recipes) => {
  return {
    type: 'GET_RECIPES',
    recipes
  }
}

const clearData = () => {
  return {
    type: 'CLEAR_RECIPES'
  }
}

const Home = (props) => {
  const [data, updateData] = useState([]);

  const chooseCategoryHandler = (chosenCategory) => {
    props.clearAllData();
    updateData([]);
    db.collection('All').where('category', '==', `${chosenCategory}`).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        props.getAllData(doc.data());
      })
    });
    updateData(data => [...data, props.recipes]);
  }

  useEffect(() => {
    db.collection('All').get().then(querySnapshot => {
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
      <>
        <header>
          Welcome home,
        <button onClick={() => app.auth().signOut()}>Sign out</button>
        </header>
        <main className={moduleStyles.homeMain}>
          <Aside chooseCategoryHandler={chooseCategoryHandler} />
          <DishList />
        </main>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);