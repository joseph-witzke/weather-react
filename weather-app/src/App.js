//IMPORTS
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

//STYLES
import './App.css';

//COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import About from './components/About';

//API KEY

const apiKey = '73039893ace3b87894afbabe8d916a2d';
const urlBase = 'https://api.openweathermap.org/data/2.5';

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
        `${urlBase}/weather?lat=${lat}&lon=${long}&units=imperial&appid=${apiKey}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          console.log(result);
        });
      await fetch(
        `${urlBase}/forecast?lat=${lat}&lon=${long}&units=imperial&appid=${apiKey}`
      )
        .then((res) => res.json())
        .then((result) => {
          // const daily = result.list.filter((item) =>
          //   item.dt_txt.includes('18:00:00')
          // );
          setForecast(result);
          console.log(result);
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
    // let year = item.getFullYear();

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
          <Forecast date={dateBuilder} forecastData={forecast} />
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
