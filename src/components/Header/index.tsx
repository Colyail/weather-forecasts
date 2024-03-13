import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SettingsModal from 'components/SettingsModal';
import TextSection from 'components/TextSection';
import { ReactComponent as ThemeSwitchIcon } from 'assets/theme-switch.svg'

const Header = () => {
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
        {time.getHours() + ":" + time.getMinutes()}
      </TextSection>
      <ToolsWrapper>
        <ToolButton>
          Search
        </ToolButton>
        <ToolButton onClick={handleClickSettings}>
          Settings
        </ToolButton>
        <IconWrapper>
          <ThemeSwitchIcon className='switch'/>
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
