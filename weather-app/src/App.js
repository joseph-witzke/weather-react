//IMPORTS
import React, { useState, useEffect } from 'react';

//STYLES
import './App.css';

//COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';
import CurrentWeather from './components/CurrentWeather';

//API KEY
const api = {
  key: '73039893ace3b87894afbabe8d916a2d',
  base: 'https://api.openweathermap.org/data/2.5',
};

function App() {
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

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
          console.log(result);
        });
    };
    getWeather();
  }, [lat, long]);

  // const getWeather = (lat, lon) => {
  //   axios
  //     .get(`${api.base}/weather?lat=${lat}&lon=${lon}&appid=${api.key}`)
  //     .then((res) => {
  //       setWeather(res.data);
  //       setTemp(res.data.main);
  //       setIcon(res.data.weather[0].icon);
  //       setLocation(res.data.coord);
  //     })
  //     .catch((err) => {
  //       console.log({ message: err });
  //     });
  // };

  // useEffect(() => {
  //   getPosition()
  //     .then((position) => {
  //       getWeather(location.lat, location.lon);
  //     })
  //     .catch((err) => {
  //       console.log({ message: err });
  //     });
  // }, []);

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
      <CurrentWeather date={dateBuilder} data={weather} />
      {/* <h2>{dateBuilder(new Date())}</h2>
      {typeof weather.main != 'undefined' ? (
        <div>
          <div>{weather.name}</div>
          <div>{Math.round(weather.main.temp)} &deg;F</div>
          <div>
            <img
              src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt='weather icon'
            />
          </div>
        </div>
      ) : (
        ''
      )} */}
      <Footer />
    </div>
  );
}

export default App;
