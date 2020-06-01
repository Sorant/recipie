import React, {useEffect, useState} from 'react';
import app from './../../firebase/base';
require('firebase/database');

const Home = () =>{
  const [name, setName] = useState(null);
  const database = app.database().ref().child("name");
  useEffect(() => {
    database.on('value', name =>{
      name: setName(name.val());
    })
  }, []);
  if(!name){
    return(
      <>Loading...</>
    )
  }
  else{
    return(
      <div>
        Welcome home, {name}
        <button onClick={() => app.auth().signOut()}>Sign out</button>
      </div>
    )
  }
}

export default Home;