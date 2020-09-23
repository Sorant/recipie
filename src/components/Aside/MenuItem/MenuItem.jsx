import React from 'react';
import styleModules from './MenuItem.module.scss';

const MenuItem = ({ imgLink, name, chooseCategoryHandler }) => {
  let altName = name.split('').splice(0, name.indexOf('.')).join('');
  altName = String(altName[0]).toUpperCase() + altName.slice(1, altName.length);

  return (
    <li className={styleModules.dishItem} onClick={() => chooseCategoryHandler(altName)}>
      <img src={imgLink} alt={`${altName}-icon`} />
    </li>
  )
}

export default MenuItem;