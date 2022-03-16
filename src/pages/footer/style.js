import styled from "styled-components"
import { Theme } from "../../styles/global"

export const FooterContainer = styled.div`
  background: ${Theme.colors.backgrounds.primary};
  box-shadow: 0px 3px 12px ${Theme.colors.shadows.primary};
  width: 100%;  
  text-align: center;
  bottom:0;
  height: 60px;
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  justify-content:center;
  position: fixed;
  z-index: 1;

    h2{
      font-size: 32px;
    }

  @media screen and (max-width: 768px) {
    height: 60px;

      h2{
      font-size: 28px;
      }
  
  }
  
`