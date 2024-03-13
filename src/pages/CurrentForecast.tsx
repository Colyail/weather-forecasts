import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { Button } from 'components/Button';
import TextSection from 'components/TextSection';
import weatherService from 'services/weather.service';
import { getHumanTime } from 'utils/getHumanTime';

import { ReactComponent as Cloudy } from 'assets/weather-cloudy.svg';

interface WeatherInfo {
  main: string,
  temp: number,
  feelLike: number,
  humidity: number,
  sunrise: number,
  sunset: number,
  timezone: number,
}

const CurrentForecast = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const selectedCity = useAppSelector((state) => state.city.value);
  const { unitType, unitSymbol } = useAppSelector((state) => state.settings);
  const { pathname } = useLocation();

  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>({
    main: "",
    temp: 0,
    feelLike: 0,
    humidity: 0,
    sunrise: 0,
    sunset: 0,
    timezone: 0,
  })

  useEffect(() => {
    if (selectedCity !== "") {
      weatherService.getGeolocation(selectedCity)
      .then((response: any) => {
        console.log(JSON.stringify(response), '----- response -----');
        weatherService.getCurrentForecasts(response.lat, response.lon, unitType)
        .then((response: any) => {
          console.log(JSON.stringify(response), '----- current weather info ----');
          setWeatherInfo({
            main: response.weather.main,
            temp: response.main.temp,
            feelLike: response.main.feels_like,
            humidity: response.main.humidity,
            sunrise: response.sys.sunrise,
            sunset: response.sys.sunset,
            timezone: response.timezone,
          })
        })
      })
    }
  }, [selectedCity, unitType]);

  return (
    <MainSection>
      {
        selectedCity === "" ?
        <TextSection $size='large'>Pick a city to see the full forecast</TextSection> :
        <>
          <ForecastMain>
            <TextSection $size='medium'>{selectedCity}</TextSection>
            <Cloudy className="weatherIcon" />
            <TextSection $size='medium'>{weatherInfo.main}</TextSection>
            <ForecastDetails>
              <TextSection $size='medium'>Temp: {weatherInfo.temp}{unitSymbol}</TextSection>
              <TextSection $size='medium'>Feels Like: {weatherInfo.feelLike}{unitSymbol}</TextSection>
              <TextSection $size='medium'>Humidity: {weatherInfo.humidity}%</TextSection>
              <TextSection $size='medium'>Sunrise: {getHumanTime(weatherInfo.sunrise, weatherInfo.timezone)}</TextSection>
              <TextSection $size='medium'>Sunset: {getHumanTime(weatherInfo.sunset, weatherInfo.timezone)}</TextSection>
            </ForecastDetails>
          </ForecastMain>
          <SettingForecastType>
            <TextSection>Forecast</TextSection>
            <SettingForecastButtonWrapper>
              <Link to="/">
                <Button $isActive={pathname === '/'} $size='medium'>
                  Now
                </Button>
              </Link>
              <Link to="/5days">
                <Button $size='medium'>
                  5 Days
                </Button>
              </Link>
            </SettingForecastButtonWrapper>
          </SettingForecastType>
        </>
      }
    </MainSection>
  )
}


const MainSection = styled.div`
  min-height: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const ForecastMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 750px;
  margin-bottom: 48px;
  gap: 16px;
  position: relative;

  .weatherIcon {
    width: 8rem;
    height: 8rem;
  }
`

const ForecastDetails = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin: auto;
  width: fit-content;
  height: fit-content;
  left: 460px;
`

const SettingForecastType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

const SettingForecastButtonWrapper = styled.div`
  gap: 12px;
  display: flex;
`

export default CurrentForecast