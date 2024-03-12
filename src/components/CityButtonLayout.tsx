import cities from 'utils/Cities.json'
import { Button } from './Button';
import styled from 'styled-components';
const CityButtonLayout = () => {
  return (
    <ButtonLayout>
      {
        cities.map((city, index) => (
          <Button key={index}>
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