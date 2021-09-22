import React from 'react';
import moment from 'moment';

function Forecast({ forecastData, weather }) {
  const daily =
    !!forecastData &&
    forecastData.filter((item) => {
      return item.dt_txt.includes('09:00:00');
    });

  return (
    <div>
      <div className='forecast-header'>
        <h1>5-DAY FORECAST</h1>
      </div>
      <div className='card-container'>
        {!!daily &&
          daily.map((i, idx) => (
            <div className='card'>
              <div>{moment(i.dt_txt).format('dddd')}</div>
              <div>{moment(i.dt_txt).format('h:mm:ss a')}</div>
              <div>{weather.name}</div>
              <div>{Math.round(i.main.temp)} &deg;F</div>
              <div>
                <img
                  src={`http://openweathermap.org/img/w/${i.weather[0].icon}.png`}
                  alt='weather icon'
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Forecast;
