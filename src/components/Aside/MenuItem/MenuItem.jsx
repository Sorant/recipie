import React from 'react';
import styleModules from './MenuItem.module.scss';

const MenuItem = ({ imgLink, name }) => {
  let altName = name.split('').splice(0, name.indexOf('.')).join('');

  return (
    <li className={styleModules.dishItem}>
      <img src={imgLink} alt={`${altName}-icon`} />
    </li>
  )
}

export default MenuItem;