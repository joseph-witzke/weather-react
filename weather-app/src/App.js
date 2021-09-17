//IMPORTS
import React, { useState, useEffect } from 'react';
import axios from 'axios';

//STYLES
import './App.css';

//COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';

//API KEY
const api = {
  key: '73039893ace3b87894afbabe8d916a2d',
  base: 'https://api.openweathermap.org/data/2.5',
  city: 'Paris',
};

function App() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=73039893ace3b87894afbabe8d916a2d`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

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
