import React from "react";
import './Style.css';

import home from './images/undraw_home_cinema_l7yl.svg';
import search from './images/search.svg';

function Upper({inputHandler, searchMe}) {
  return (
      <div className="section">
        <div className="dock">
          <img
            src={home}
            alt="movie"
            className="home-logo"
          />
          <div>
            <h1 className="logo">MoviePlex</h1>
            <p className="slogan">Place for every movie lovers..</p>
          </div>
          <form className="input-box">
            <input type="text" className="textbox" placeholder="Search Here" onChange={inputHandler}/>
            <div>
              <img src={search} alt="search" className="button" onClick={() => searchMe()}/>
            </div>
          </form>
        </div>
      </div>
  );
}

export default Upper;
