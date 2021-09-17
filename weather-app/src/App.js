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
};

function App() {
  const [weather, setWeather] = useState([]);
  const [temp, setTemp] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    axios
      .get(`${api.base}/weather?q=Paris&appid=${api.key}`)
      .then((res) => {
        setWeather(res.data);
        setTemp(res.data.main);
        setIcon(res.data.weather[0].icon);
      })
      .catch((err) => {
        console.log({ message: err });
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
      <div>{weather.name}</div>
      <div>{Math.round(temp.temp)}</div>
      <div>
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt='weather icon'
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
