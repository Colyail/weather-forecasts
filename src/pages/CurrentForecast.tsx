import { useState } from 'react';
import CityButtonGroup from 'components/CityButtonLayout';
import Header from 'components/Header';
import styled from 'styled-components';

const CurrentForecast = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");
  return (
    <PageWrapper>
      <Header />
      <MainSection>
        {
          selectedCity === "" ?
          <TextSection>Pick a city to see the full forecast</TextSection> :
          <TextSection>{selectedCity}</TextSection>
        }
      </MainSection>
      <CityButtonGroup setSelectedCity={setSelectedCity} selectedCity={selectedCity}/>
    </PageWrapper>
  )
}


const MainSection = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
`

const TextSection = styled.p`
  display: flex;
  align-items: center;
  font-size: 44px;
  font-weight: bold;
  text-align: center;
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