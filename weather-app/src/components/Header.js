import React from 'react';

function Header() {
  return (
    <nav className='navbar navbar-default'>
      <div className='container'>
        <div className='navbar-header'>
          <p className='navbar-brand'>WEATHER</p>
        </div>
        <ul className='nav navbar-nav navbar-right'>
          <li id='home'>
            <a href='/'>HOME</a>
          </li>
          <li id='compose'>
            <a href='/forecast'>FORECAST</a>
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
