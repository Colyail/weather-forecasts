import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { Button } from 'components/Button';
import TextSection from 'components/TextSection';
import weatherService from 'services/weather.service';
import { MainForecast } from 'utils/fiveDaysForecast';
import SelectIcon from 'components/SelectIcon';


const FiveDaysForecast = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const selectedCity = useAppSelector((state) => state.city.value);
  const { unitType, unitSymbol } = useAppSelector((state) => state.settings);

  const { pathname } = useLocation();

  const [forecastData, setForeCastData] = useState<MainForecast[]>()
  
  useEffect(() => {
    if (selectedCity !== "") {
      weatherService.getGeolocation(selectedCity)
      .then((response: any) => {
        weatherService.getFiveDaysForecasts(response.lat, response.lon, unitType)
        .then((response: MainForecast[]) => {
          setForeCastData(response);
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
          <TextSection $size='medium'>{selectedCity}</TextSection>
          <FiveDaysForecastWrapper>
            {forecastData?.map((item, index) => (
              <FiveDaysForecastMain>
                <TextSection>{item.day}</TextSection>
                {SelectIcon(item.weather)}
                <TextSection $size='medium'>{item.weather}</TextSection>
                <TextSection $size='medium'>H: {item.highestTemp}{unitSymbol} / L:{item.lowestTemp}{unitSymbol}</TextSection>
              </FiveDaysForecastMain>
            ))}
          </FiveDaysForecastWrapper>
          <SettingForecastType>
            <SettingForecastButtonWrapper>
              <Link to="/">
                <Button $isActive={pathname === '/'} $size='medium'>
                  Now
                </Button>
              </Link>
              <Link to="/5days">
                <Button $isActive={pathname === '/5days'} $size='medium'>
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
  gap: 2px;
`

const FiveDaysForecastWrapper = styled.div`
  display: flex;
  gap: 16px;
`

const FiveDaysForecastMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;
  
  position: relative;

  .weatherIcon {
    width: 8rem;
    height: 8rem;
  }
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

export default FiveDaysForecast