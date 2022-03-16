import styled from "styled-components"
import { Theme } from "../../../styles/global";

export const MainContainer = styled.main`
width: 80%;
padding-bottom: 150px;
border-left: 2px solid #ccc;
width: 100%;
z-index: -1;

  section{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    .pokecards{
      border-top: 1px solid rgb(223, 223, 223);
      display: grid;
      gap: 20px;
      grid-template-columns: 250px 250px 250px;
      grid-template-rows: 325px 325px 325px 325px;
      justify-content: center;
      align-items: center;
      padding: 15px;
      width: 100%;

      >div{
        align-items: center;
        background: #FFFFFF;
        box-shadow: 0px 12px 40px -5px rgba(28, 29, 4, 0.15);
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 15px 0;

        .pokecards__container{
          align-items: center;
          display: flex;
          height: 150px;
          justify-content: center;
          position: relative;
          width: 100%;

          svg{
            position: absolute;
            top: 0px;
            width: 60%;
          }
          img{
            cursor: pointer;
            height: 100%;
            transition: 0.7s all;
            z-index: 2;
          }
        
        }
        p{
          color: #444;
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          width: 100%;
        }        
      }

      >div:hover img{
        transform: scale(1.1);
      }
      .pokecards__types{
        display: flex;
        gap: 5px; 
        background-color: #fff;

        span{
          /* border: 2px solid #ccc; */
          border-radius: 999px;
          padding: 5px 10px;
          text-align: center;
          width: 80px;
        }
      }
    }
  }

.card1, .card4, .card7, .card10{
  grid-column: 1 / 2;
}
.card2, .card5, .card8, .card11{
  grid-column: 2 / 3;
}
.card3, .card6, .card9, .card12{
  grid-column: 3 / 4;
}

.card1, .card2, .card3{
  grid-row: 1 / 2;
}

.card4, .card5, .card6{
  grid-row: 2 / 3;
}

.card7, .card8, .card9{
  grid-row: 3 / 4;
}
.card10, .card11, .card12{
  grid-row: 4 / 5;
}
@media screen and (max-width: 990px) { 

  >section{
    .pokecards{
      grid-template-columns: 250px 250px;
      grid-template-rows: 325px;
  
      >div:nth-of-type(2n + 1){
      grid-column: 1 / 2;
      }
      >div:nth-of-type(2n){
        grid-column: 2 / 3;
      }
    }
  }

  .card1, .card2{
    grid-row: 1 / 2;
    background-color:red;
  }
  .card3, .card4{
    grid-row: 2 / 3;
  }
  .card5, .card6{
    grid-row: 3 / 4;
  }
  .card7, .card8{
    grid-row: 4 / 5;
  }
  .card9, .card10{
    grid-row: 5 / 6;
  }
  .card11, .card12{
    grid-row: 6 / 7;
  }
  
}

@media screen and (max-width: 560px) {
  
  >section{
    .pokecards{
      grid-template-columns: 250px;
      grid-template-rows: 325px 325px 325px 325px 325px 325px 325px 325px 325px 325px 325px 325px;
  
      >div:nth-of-type(1n){
        grid-column: 1 / 2;
      }
      .card1{
        grid-row: 1 / 2;
      }
      .card2{
        grid-row: 2 / 3;
      }
      .card3{
        grid-row: 3 / 4;
      }
      .card4{
        grid-row: 4 / 5;
      }
      .card5{
        grid-row: 5 / 6;
      }
      .card6{
        grid-row: 6 / 7;
      }
      .card7{
        grid-row: 7 / 8;
      }
      .card8{
        grid-row: 8 / 9;
      }
      .card9{
        grid-row: 9 / 10;
      }
      .card10{
        grid-row: 10 / 11;
      }
      .card11{
        grid-row: 11 / 12;
      }
      .card12{
        grid-row: 12 / 13;
      }    
    }
  }
}

@media screen and (max-width: 900px) {
width: 70%;    
}

@media screen and (max-width: 768px) {
width: 100%;
border-left: none;

}

`

export const Types = styled.span`
  border: 2px solid ${props=> Theme.pokecolors[props.color]};
  color: ${props=> Theme.pokecolors[props.color]};
`