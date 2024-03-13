import { useEffect, useState } from 'react';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RootState } from 'redux/store';
import SettingsModal from 'components/SettingsModal';
import TextSection from 'components/TextSection';
import { setTheme, ThemeTypes } from '../../redux/themeSlice';
import { TimeFormat } from '../../redux/settingsSlice';
import { setSelectedCity } from '../../redux/citySlice';
import { getFullTimeFormat, getMeridiemTimeFormat } from 'utils/getTimeFromData';
import { ReactComponent as ThemeSwitchBlackIcon } from 'assets/theme-switch-black.svg'
import { ReactComponent as ThemeSwitchWhiteIcon } from 'assets/theme-switch-white.svg'
import { ReactComponent as CloseCircleBlackIcon } from 'assets/close-circle-black.svg';
import { ReactComponent as CloseCircleWhiteIcon } from 'assets/close-circle-white.svg';
import cities from 'utils/Cities.json'

const Header = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { theme } = useAppSelector((state) => state.theme);
  const { timeFormat } = useAppSelector((state) => state.settings);
  const dispatch = useDispatch();

  const [time, setTime] = useState<Date>(new Date());
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleClickSettings = () => {
    setIsOpenModal(true);
  }

  const handleInputEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const matchedCity = cities.find(city => city.toLowerCase() === searchInput.toLowerCase());
      if (matchedCity) {
        dispatch(setSelectedCity(matchedCity))
      }
    }
  }

  const handleClickClose = () => {
    setIsOpenSearch(false);
    setSearchInput("");
  }

  return (
    <HeaderContainer>
      <TextSection>
        {
          timeFormat === TimeFormat.Full ?
          getFullTimeFormat(time) :
          getMeridiemTimeFormat(time)
        }
      </TextSection>
      <ToolsWrapper>
        {
          isOpenSearch ?
          <SearchBarContainer>
            <SearchTerm
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              onKeyDown={(event) => handleInputEnter(event)}
            />
            {
              theme === ThemeTypes.Dark ?
              <CloseCircleBlackIcon className='close' onClick={handleClickClose}/> :
              <CloseCircleWhiteIcon className='close' onClick={handleClickClose}/>
            }
          </SearchBarContainer> :
          <ToolButton onClick={() => setIsOpenSearch(true)}>
            Search
          </ToolButton>
        }
        <ToolButton onClick={handleClickSettings}>
          Settings
        </ToolButton>
        <IconWrapper>
          {
            theme === ThemeTypes.Dark ?
            <ThemeSwitchWhiteIcon className='switch'  onClick={() => dispatch(setTheme(ThemeTypes.Light))}/> :
            <ThemeSwitchBlackIcon className='switch' onClick={() => dispatch(setTheme(ThemeTypes.Dark))}/>
          }
        </IconWrapper>
      </ToolsWrapper>
      <SettingsModal time={time} isOpen={isOpenModal} setIsOpen={setIsOpenModal}/>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`

const ToolsWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .close {
    right: 8px;
    position: absolute;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`

const SearchTerm = styled.input`
  width: 100%;
  border: ${props => `2px solid ${props.theme.primary}`};
  padding: 5px;
  padding-right: 28px;
  height: 20px;
  border-radius: 5px;
  outline: none;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  font-size: 20px;
`

const ToolButton = styled.div`
  cursor: pointer;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  .switch {
    width: 1.5rem;
    height: 1.5rem;
  }
`

export default Header;
