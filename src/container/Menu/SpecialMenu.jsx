import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';
import { useNavigate } from 'react-router-dom';

const SpecialMenu = () => {
  const navigate = useNavigate()

  const handleRedirectToMenuPage = () => {
    navigate('/menu')
  }

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Starters</p>
        <div className="app__specialMenu_menu_items">
          {data.starters.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.mon1} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Main Courses</p>
        <div className="app__specialMenu_menu_items">
          {data.mainCourses.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button onClick={handleRedirectToMenuPage} type="button" className="custom__button">View More</button>
    </div>
  </div>
  )
};

export default SpecialMenu;
