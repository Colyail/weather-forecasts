import { useEffect, useState } from 'react';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RootState } from 'redux/store';
import SettingsModal from 'components/SettingsModal';
import TextSection from 'components/TextSection';
import { setTheme, ThemeTypes } from '../../redux/themeSlice';
import { ReactComponent as ThemeSwitchBlackIcon } from 'assets/theme-switch-black.svg'
import { ReactComponent as ThemeSwitchWhiteIcon } from 'assets/theme-switch-white.svg'

const Header = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { theme } = useAppSelector((state) => state.theme)
  const dispatch = useDispatch();

  const [time, setTime] = useState<Date>(new Date());
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

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

  return (
    <HeaderContainer>
      <TextSection>
        {time.getHours().toString().padStart(2, '0') + ":" + time.getMinutes().toString().padStart(2, '0')}
      </TextSection>
      <ToolsWrapper>
        <ToolButton>
          Search
        </ToolButton>
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
