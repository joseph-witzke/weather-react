import React from 'react';
import moment from 'moment';

function Forecast({ forecastData }) {
  return (
    <div>
      <h1>5-DAY FORECAST</h1>
      <div>
        {typeof forecastData.city != 'undefined' ? (
          <div>
            <div>{moment(forecastData.list[0].dt_txt).format('dddd')}</div>
            <div>{forecastData.city.name}</div>
            <div>{forecastData.list[0].main.temp} &deg;F</div>
            <div>
              <img
                src={`http://openweathermap.org/img/w/${forecastData.list[0].weather[0].icon}.png`}
                alt='weather icon'
              />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div>
        {typeof forecastData.city != 'undefined' ? (
          <div>
            <div>{moment(forecastData.list[4].dt_txt).format('dddd')}</div>
            <div>{forecastData.city.name}</div>
            <div>{forecastData.list[4].main.temp} &deg;F</div>
            <div>
              <img
                src={`http://openweathermap.org/img/w/${forecastData.list[4].weather[0].icon}.png`}
                alt='weather icon'
              />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div>
        {typeof forecastData.city != 'undefined' ? (
          <div>
            <div>{moment(forecastData.list[12].dt_txt).format('dddd')}</div>
            <div>{forecastData.city.name}</div>
            <div>{forecastData.list[12].main.temp} &deg;F</div>
            <div>
              <img
                src={`http://openweathermap.org/img/w/${forecastData.list[8].weather[0].icon}.png`}
                alt='weather icon'
              />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div>
        {typeof forecastData.city != 'undefined' ? (
          <div>
            <div>{moment(forecastData.list[21].dt_txt).format('dddd')}</div>
            <div>{forecastData.city.name}</div>
            <div>{forecastData.list[21].main.temp} &deg;F</div>
            <div>
              <img
                src={`http://openweathermap.org/img/w/${forecastData.list[12].weather[0].icon}.png`}
                alt='weather icon'
              />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div>
        {typeof forecastData.city != 'undefined' ? (
          <div>
            <div>{moment(forecastData.list[30].dt_txt).format('dddd')}</div>
            <div>{forecastData.city.name}</div>
            <div>{forecastData.list[30].main.temp} &deg;F</div>
            <div>
              <img
                src={`http://openweathermap.org/img/w/${forecastData.list[15].weather[0].icon}.png`}
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
