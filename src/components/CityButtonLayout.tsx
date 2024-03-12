import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store';
import { setSelectedCity } from '../redux/citySlice';
import cities from 'utils/Cities.json'
import { Button } from './Button';
import styled from 'styled-components';

const CityButtonLayout = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const selectedCity = useAppSelector((state) => state.city.value);
  const dispatch = useDispatch();

  return (
    <ButtonLayout>
      {
        cities.map((city, index) => (
          <Button
            key={index}
            onClick={() => dispatch(setSelectedCity(city))}
            $isActive={selectedCity === city}
            $height={56}
            $radius={4}
          >
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