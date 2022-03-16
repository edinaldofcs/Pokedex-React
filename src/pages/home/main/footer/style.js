import styled from "styled-components"

export const FooterMainBtn = styled.div`
align-items: center;
display: flex;
justify-content: space-around;
width: 400px;

  .pages__btn{
    background: transparent;
    border: 1px solid #8C8C8D;
    border-radius: 8px;
    cursor: pointer; 
    height: 32px;
    width: 85px;
  }

  .btn__num{
    border-radius: 100%;
    height: 40px;
    width: 40px;
  }

  .btn__selected{
    background-color: #44CCA6;
    color: #fff;
  }

@media screen and (max-width: 460px) {
padding: 0 15px;
width: 100%;
  
  .pages__btn{
    font-size: 16px;
  }  
}

@media screen and (max-width: 368px) {
  .pages__btn{
    font-size: 14px;
  }  
  .pages__btn{
    width: 70px;
  }
  .btn__num{
    width: 30px;
    height: 30px;
  }
}

`