import React from 'react';

function About() {
  return (
    <div className='about-container'>
      <h3>Areas for improvement with this website:</h3>
      <div>
        <li>
          Fix the disconnect between my geolcation function and my api call
        </li>
        <li>
          Fixing above would then allow me to successfully filter and map
          through the list array <br />
          -- ultimately allowing me to make a forecastCard component, rather
          than coding each
        </li>
        <li>Add 5-day forecast that includes each 3-hour update</li>
        <li>Refactor so that my App.js is only rendering my components</li>
        <li>Enhance styling of the pages</li>
        <li>Include a loading feature, in case of delays for content</li>
        <li>Expand test coverage</li>
      </div>
    </div>
  );
}

export default About;
