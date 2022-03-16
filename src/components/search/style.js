import styled from "styled-components"

export const SearchContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 30px;
width: 100%;

  input{
    border: 1px solid #C9CAD1;
    border-radius: 6px;
    font-size: 20px;
    height: 32px;
    padding-left: 10px;
    width: 400px;
  }

  input:focus{
    background-color: rgba(0,0,0,0.04);
    outline: none;
  }

@media screen and (max-width: 768px) {  
width: 80%;

  input{
    width: 80%;
  }
}

`