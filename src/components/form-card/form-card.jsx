import React from 'react';

const FormCard = (props) =>{
  return(
    <>
      <h1>{props.title}</h1>
      {props.children}
    </>
  )
}

export default FormCard;