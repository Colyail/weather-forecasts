import styled from 'styled-components'

export const Button = styled.button<{ $isActive?: boolean; $size?: string;}>`
  height: ${props => props.$size === 'large' ? 56 : props.$size === 'medium' ? 36 : 28}px;
  min-width: 136px;
  background: ${props => props.$isActive? props.theme.backgroundSecondary : props.theme.background};
  color: ${props => props.$isActive ? props.theme.textSecondary : props.theme.text};
  border: ${props => props.theme.border} solid 2px;
  border-radius: ${props => props.$size === 'large' ? 4 : 8}px;
  font-size: ${props => props.$size === 'large' ? 24 : props.$size === 'medium' ? 20 : 16}px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.textSecondary};
  }
`