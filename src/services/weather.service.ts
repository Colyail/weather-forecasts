import axios from 'axios';
import { UnitTypes } from 'redux/settingsSlice';

const GEO_API_URL = 'http://api.openweathermap.org/geo/1.0/direct?q=';
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const FORECAST_API_URL = 'https://api.openweathermap.org/data/2.5/forecast?';
const API_KEY = process.env.REACT_APP_OPEN_WEATHERMAP_API_KEY;

class WeatherService {
  getGeolocation = (cityName: string) => {
    return axios
    .get(`${GEO_API_URL}${cityName}&appid=${API_KEY}`)
    .then(response => {
      return {
        name: response.data[0].name as string,
        lat: response.data[0].lat as number,
        lon: response.data[0].lon as number,
        country: response.data[0].country as string,
        state: response.data[0].state as string,
      }
    });
  };

  getCurrentForecasts = (lat: number, lon: number, unit:UnitTypes) => {
    return axios
    .get(`${WEATHER_API_URL}lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`)
    .then(response => {
      return response.data;
    })
  }

  getFiveDaysForecasts = (lat: number, lon: number, unit: UnitTypes) => {
    return axios
    .get(`${FORECAST_API_URL}lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`)
    .then(response => {
      return response.data;
    })
  }
}

export default new WeatherService();