import React from "react";

const Menu = (props) => {
  return (
    <nav className="nav">
      <ul className="nav__menu">
        <li className="nav__menu-item">
          <p>Sort By : </p>
        </li>
        <li className="nav__menu-item">
          <button type="button" onClick={props.setFilterD}>
            Date Desc
          </button>
        </li>
        <li className="nav__menu-item">
          <button type="button" onClick={props.setFilterA}>
            Date Asc
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
