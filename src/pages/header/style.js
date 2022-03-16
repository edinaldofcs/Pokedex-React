import styled from "styled-components"
import { Theme } from "../../styles/global"

export const HeaderContainer = styled.div`
  display: flex;
  height: 60px;
  background: ${Theme.colors.backgrounds.primary};
  box-shadow: 0px 3px 12px ${Theme.colors.shadows.primary};
  width: 100%;
  align-items: center;
  padding: 0 50px;
  z-index: 1;
  position: fixed;
  
  nav{
    margin-left: 100px;  

    ul{
    display: flex;
    width: 500px;
    justify-content: space-around;
    }

    li a{
      font-family: Satoshi;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: ${Theme.colors.text.primary};
    }

    a:hover{
      text-decoration: underline;
    }
  }

@media screen and (max-width: 768px) {
  flex-direction: column;  
  justify-content: center; 
  height: 60px; 
    nav{
      display: none;
    }
}

  `