import styled from "styled-components"

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items:center;
    h3{
      color: #8C8C8D;
    }
    label{
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
      input{
        opacity: 0;
        width: 0;
        height: 0;
      }
      span{
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
      }
      span:before{
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
      }      
      input:checked + span {
        background-color: #44CCA6;
      }
      input:focus + span {
        box-shadow: 0 0 1px #2196F3;
      }
      input:checked + span:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }
      span.round {
        border-radius: 34px;
      }

      span.round:before {
        border-radius: 50%;
      }
    }


`