import styled from 'styled-components';
import { ReactComponent as ThemeSwitchIcon } from 'assets/theme-switch.svg'

const Header = () => {
  return (
    <HeaderContainer>
      <Timer>
        18:38
      </Timer>
      <ToolsWrapper>
        <ToolButton>
          Search
        </ToolButton>
        <ToolButton>
          Settings
        </ToolButton>
        <IconWrapper>
          <ThemeSwitchIcon className='switch'/>
        </IconWrapper>
      </ToolsWrapper>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`
const Timer = styled.div`
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
