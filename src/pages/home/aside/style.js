import styled from "styled-components"

export const AsideContainer =  styled.section`
align-items: center;
background-color: #fff;
display: flex;
justify-content: center;
left: 0;
list-style: circle;
text-align: center;
width: 20%; 
z-index: -1;
  >div  {
    display: flex;
    flex-direction: column;
    gap: 20px;
    h2{
      color: #8C8C8D;
      cursor: pointer;
      font-size: 24px;
      font-style: normal;
      font-weight: bold;
      line-height: 32px;
      margin-top: 30px;
      width: 100%;
    }
    details div{
      text-align: left;

      input{
        margin-top: 14px;
      }
      label{
        color: #747474;
        cursor: pointer;
        font-size: 24px;
        font-weight: 500;
        line-height: 22px;
        margin-left: 5px;
      }
    }
  } 

@media screen and (max-width: 990px) {
font-size: 16px;
width: 30%;  
}
@media screen and (max-width: 768px) {
display: none;
}

`