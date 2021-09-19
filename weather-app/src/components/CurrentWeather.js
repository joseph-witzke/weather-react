import React from 'react';

function CurrentWeather({ date, weatherData }) {
  if (weatherData) {
    return (
      <div>
        <div>
          <h2>{date(new Date())}</h2>
          {typeof weatherData.main != 'undefined' ? (
            <div>
              <div>{weatherData.name}</div>
              <div>{Math.round(weatherData.main.temp)} &deg;F</div>
              <div>
                <img
                  src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                  alt='weather icon'
                />
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  } else {
    <div>Loading...</div>;
  }
}

export default CurrentWeather;
