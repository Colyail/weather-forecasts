import cities from 'utils/Cities.json'
import { Button } from './Button';
import styled from 'styled-components';

interface CityButtonLayoutProps {
  setSelectedCity: (city: string) => void;
  selectedCity: string;
}
const CityButtonLayout = (props: CityButtonLayoutProps) => {
  const {
    setSelectedCity,
    selectedCity,
  } = props;

  return (
    <ButtonLayout>
      {
        cities.map((city, index) => (
          <Button key={index} onClick={() => setSelectedCity(city)} $isActive={selectedCity === city}>
            {city}
          </Button>
        ))
      }
    </ButtonLayout>
  )
};

const ButtonLayout = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export default CityButtonLayout;