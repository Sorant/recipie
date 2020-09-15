import React from 'react';
import dishIcon from '../../icons/dish.svg';
import soupsIcon from '../../icons/soups.svg';
import mainDishesIcon from '../../icons/main-dishes.svg';
import saladsIcon from '../../icons/salads.svg';
import dessertsIcon from '../../icons/desserts.svg';
import drinksIcon from '../../icons/drinks.svg';
import alcoholicDrinksIcon from '../../icons/alcoholic-drinks.svg';
import styleModules from './Aside.module.scss';
import MenuItem from './MenuItem/MenuItem';

const imgArray = [dishIcon, soupsIcon, mainDishesIcon, saladsIcon, dessertsIcon, drinksIcon, alcoholicDrinksIcon];

const menuItems = imgArray.map((item, key) => <MenuItem key={item} imgLink={item} name={item.split('').splice(item.indexOf('media/') + ('/media').length, item.length).join('')} />)

const Aside = () => {

  return (
    <nav className={styleModules.nav}>
      <ul>
        {menuItems}
      </ul>
    </nav >
  )
}

export default Aside;