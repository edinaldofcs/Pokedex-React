import styled from "styled-components"

export const MasterContainer = styled.section`
width: 100%;
position: absolute;
top: 60px;
display: flex;
align-items: flex-start;
z-index: -2;  
justify-content: center;
height: calc(100% - 120px);
  
@media screen and (max-width: 900px) {
  main{
    width: 70%;
  }    
}

@media screen and (max-width: 768px) {
  main{
    width: 100%;
    border-left: none;
  }
}

`