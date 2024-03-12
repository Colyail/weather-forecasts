import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { Button } from 'components/Button';
import { ReactComponent as Cloudy } from 'assets/weather-cloudy.svg';
import { ReactComponent as Sunny } from 'assets/weather-sunny.svg';

const CurrentForecast = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const selectedCity = useAppSelector((state) => state.city.value);

  const { pathname } = useLocation();
  
  return (
    <MainSection>
      {
        selectedCity === "" ?
        <TextSection $size='large'>Pick a city to see the full forecast</TextSection> :
        <>
          <TextSection $size='medium'>{selectedCity}</TextSection>
          <FiveDaysForecastWrapper>
            <FiveDaysForecastMain>
              <TextSection>Fri</TextSection>
              <Cloudy className="weatherIcon" />
              <TextSection $size='medium'>Clouds</TextSection>
              <TextSection $size='medium'>H: 31°C / L:24°C</TextSection>
            </FiveDaysForecastMain>
            <FiveDaysForecastMain>
              <TextSection>Sat</TextSection>
              <Cloudy className="weatherIcon" />
              <TextSection $size='medium'>Clouds</TextSection>
              <TextSection $size='medium'>H: 33°C / L:26°C</TextSection>
            </FiveDaysForecastMain>
            <FiveDaysForecastMain>
              <TextSection>Sun</TextSection>
              <Sunny className="weatherIcon" />
              <TextSection $size='medium'>Sunny</TextSection>
              <TextSection $size='medium'>H: 33°C / L:26°C</TextSection>
            </FiveDaysForecastMain>
            <FiveDaysForecastMain>
              <TextSection>Mon</TextSection>
              <Cloudy className="weatherIcon" />
              <TextSection $size='medium'>Clouds</TextSection>
              <TextSection $size='medium'>H: 28°C / L:24°C</TextSection>
            </FiveDaysForecastMain>
            <FiveDaysForecastMain>
              <TextSection>Tue</TextSection>
              <Cloudy className="weatherIcon" />
              <TextSection $size='medium'>Clouds</TextSection>
              <TextSection $size='medium'>H: 27°C / L:24°C</TextSection>
            </FiveDaysForecastMain>
          </FiveDaysForecastWrapper>
          <SettingForecastType>
            <SettingForecastButtonWrapper>
              <Link to="/">
                <Button $isActive={pathname === '/'} $height={36} $radius={8}>
                  Now
                </Button>
              </Link>
              <Link to="/5days">
                <Button $isActive={pathname === '/5days'} $height={36} $radius={8}>
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

const TextSection = styled.span<{$size?: string;}>`
  display: flex;
  align-items: center;
  font-size: ${props => props.$size === "large"? "44px" :  props.$size === "medium" ? "24px" : "20px"};
  font-weight: bold;
  text-align: center;
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

export default CurrentForecast