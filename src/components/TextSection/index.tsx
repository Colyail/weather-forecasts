import styled from 'styled-components';

const TextSection = styled.span<{$size?: string;}>`
  display: flex;
  align-items: center;
  font-size: ${props => props.$size === "large"? "44px" :  props.$size === "medium" ? "24px" : "22px"};
  font-weight: bold;
  text-align: center;
`

export default TextSection;