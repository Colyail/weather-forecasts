import styled from 'styled-components';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { Button } from 'components/Button';
import { ReactComponent as Cloudy } from 'assets/weather-cloudy.svg';

const CurrentForecast = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const selectedCity = useAppSelector((state) => state.city.value);

  return (
    <MainSection>
      {
        selectedCity === "" ?
        <TextSection $size='large'>Pick a city to see the full forecast</TextSection> :
        <>
          <ForecastMain>
            <TextSection $size='medium'>{selectedCity}</TextSection>
            <Cloudy className="cloudy" />
            <TextSection $size='medium'>Clouds</TextSection>
            <ForecastDetails>
              <TextSection $size='medium'>Temp: 24°C</TextSection>
              <TextSection $size='medium'>Feels Like: 24°C</TextSection>
              <TextSection $size='medium'>Humidity: 66%</TextSection>
              <TextSection $size='medium'>Sunrise: 06:28</TextSection>
              <TextSection $size='medium'>Sunset: 18:58</TextSection>
            </ForecastDetails>
          </ForecastMain>
          <SettingForecastType>
            <TextSection>Forecast</TextSection>
            <SettingForecastButtonWrapper>
              <Button $isActive $height={36} $radius={8}>
                Now
              </Button>
              <Button $height={36} $radius={8}>
                5 Days
              </Button>
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

const TextSection = styled.span<{$size?: string;}>`
  display: flex;
  align-items: center;
  font-size: ${props => props.$size === "large"? "44px" :  props.$size === "medium" ? "24px" : "20px"};
  font-weight: bold;
  text-align: center;
`

const ForecastMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 560px;
  margin-bottom: 48px;
  gap: 16px;
  position: relative;

  .cloudy {
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
  right: 0px;
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

const PageWrapper = styled.div`
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`


export default CurrentForecast