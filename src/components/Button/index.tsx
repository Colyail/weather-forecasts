import styled from 'styled-components'

export const Button = styled.button<{ $isActive?: boolean; }>`
  height: 56px;
  background: ${props => props.$isActive? props.theme.backgroundSecondary : props.theme.background};
  color: ${props => props.$isActive ? props.theme.textSecondary : props.theme.text};
  border: ${props => props.theme.border} solid 2px;
  border-radius: 4px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.textSecondary};
  }
`