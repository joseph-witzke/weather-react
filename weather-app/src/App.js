//IMPORTS
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { api } from './config';

//STYLES
import './App.css';

//COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import About from './components/About';

function App() {
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const getWeather = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      await fetch(
        `${api.base}/weather?lat=${lat}&lon=${long}&units=imperial&appid=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
        });
      await fetch(
        `${api.base}/forecast?lat=${lat}&lon=${long}&units=imperial&appid=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setForecast(result.list);
        });
    };
    getWeather();
  }, [lat, long]);

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

    return `${day} ${date} ${month}`;
  };

  return (
    <div className='App'>
      <Switch>
        <Route path='/about'>
          <Header />
          <About />
          <Footer />
        </Route>
        <Route path='/forecast'>
          <Header />
          <Forecast forecastData={forecast} weather={weather} />
          <Footer />
        </Route>
        <Route path='/'>
          <Header />
          <CurrentWeather date={dateBuilder} weatherData={weather} />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
