import React from 'react';

function Header() {
  return (
    <nav class='navbar navbar-default'>
      <div class='container'>
        <div class='navbar-header'>
          <p class='navbar-brand'>WEATHER</p>
        </div>
        <ul class='nav navbar-nav navbar-right'>
          <li id='home'>
            <a href='/'>HOME</a>
          </li>
          <li id='compose'>
            <a href='/compose'>FORCAST</a>
          </li>
          <li id='about'>
            <a href='/about'>ABOUT US</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
