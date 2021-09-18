import React from 'react';

function Forecast({ date, forecastData }) {
  return (
    <div>
      <h1>5-DAY FORECAST</h1>
      <div>
        <h2>{date(new Date())}</h2>
        {typeof forecastData.city != 'undefined' ? (
          <div>
            <div>{forecastData.city.name}</div>
            <div>{forecastData.list[0].main.temp} &deg;F</div>
            {/* <div>
              <img
                src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                alt='weather icon'
              />
            </div> */}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default Forecast;

// {typeof forecastData.main != 'undefined' ? (
//     <div>
//       <div>{forecastData.city}</div>
//     </div>
//   ) : (
//     ''
//   )}
