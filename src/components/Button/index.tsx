import styled from 'styled-components'

export const Button = styled.button`
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  border: ${props => props.theme.border} solid 1px;
  border-radius: 2px;
  &:hover {
    background: ${props => props.theme.backgroundSecondary};
    color: ${props => props.theme.textSecondary};
  }
`