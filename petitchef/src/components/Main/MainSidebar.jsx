import React from 'react';

function MainSidebar() {
  return (
    <div className="menuLinks">
      <ul>
        <li className="navItem active">
          <a href="#" className="d-flex align-items-center nav-link">
            <i className="fa fa-home" aria-hidden="true"></i>
            <span>Home</span>
          </a>
        </li>
        <li className="navItem">
          <a href="#" className="d-flex align-items-center nav-link">
            <i className="fa fa-briefcase" aria-hidden="true"></i>
            <span>Market</span>
          </a>
        </li>
        <li className="navItem">
          <a href="#" className="d-flex align-items-center nav-link">
            <i className="fa fa-heart-o" aria-hidden="true"></i>
            <span>Favoritos</span>
          </a>
        </li>
        <li className="navItem">
          <a href="#" className="d-flex align-items-center nav-link">
            <i className="fa fa-square-o" aria-hidden="true"></i>
            <span>Coleções</span>
          </a>
        </li>
        <li className="navItem">
          <a href="#" className="d-flex align-items-center nav-link">
            <i className="fa fa-fire" aria-hidden="true"></i>
            <span>Em Alta</span>
          </a>
        </li>
        <li className="navItem">
          <a href="#" className="d-flex align-items-center nav-link">
            <i className="fa fa-star" aria-hidden="true"></i>
            <span>Destaques</span>
          </a>
        </li>
        <li className="navItem">
          <a href="#" className="d-flex align-items-center nav-link">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <span>Comprados</span>
          </a>
        </li>
        <li className="navItem">
          <a href="#" className="d-flex align-items-center nav-link">
            <i className="fa fa-cog" aria-hidden="true"></i>
            <span>Configurações</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MainSidebar;
