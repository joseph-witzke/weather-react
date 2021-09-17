//IMPORTS
import React, { useState } from 'react';

//STYLES
import './App.css';

//COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [weather, setWeather] = useState({});

  const dateBuilder = (item) => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    let day = days[item.getDay()];
    let date = item.getDate();
    let month = months[item.getMonth()];
    let year = item.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className='App'>
      <Header />
      <h1>Weather App</h1>
      <h2>{dateBuilder(new Date())}</h2>
      <Footer />
    </div>
  );
}

export default App;
