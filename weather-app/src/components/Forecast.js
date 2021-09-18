import React from 'react';

function Forecast({ date, data }) {
  return (
    <div>
      <h1>5-DAY FORECAST</h1>
      <div>
        <h2>{date(new Date())}</h2>
        {typeof data.main != 'undefined' ? (
          <div>
            <div>{data.name}</div>
            <div>{Math.round(data.main.temp)} &deg;F</div>
            <div>
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
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
}

export default Forecast;
