import React from 'react';

function CurrentWeather({ date, data }) {
  return (
    <div>
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

export default CurrentWeather;
