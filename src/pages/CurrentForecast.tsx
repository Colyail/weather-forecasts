import { useState } from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import CityButtonGroup from 'components/CityButtonLayout';
import { Button } from 'components/Button';
import { ReactComponent as Cloudy } from 'assets/weather-cloudy.svg';

const CurrentForecast = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");
  return (
    <PageWrapper>
      <Header />
      <MainSection>
        {
          selectedCity === "" ?
          <TextSection $size='large'>Pick a city to see the full forecast</TextSection> :
          <>
            <ForecastMain>
              <TextSection $size='medium'>{selectedCity}</TextSection>
              <Cloudy className="cloudy" />
              <TextSection $size='medium'>Clouds</TextSection>
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
      <CityButtonGroup setSelectedCity={setSelectedCity} selectedCity={selectedCity}/>
    </PageWrapper>
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
  margin-bottom: 48px;

  .cloudy {
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

const PageWrapper = styled.div`
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`


export default CurrentForecast