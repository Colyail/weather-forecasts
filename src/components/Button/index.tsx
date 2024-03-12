import styled from 'styled-components'

export const Button = styled.button`
  
  height: 56px;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  border: ${props => props.theme.border} solid 2px;
  border-radius: 4px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.backgroundSecondary};
    color: ${props => props.theme.textSecondary};
  }
`