import { useState } from "react";
import { UseInfo } from "../../context/context";
import { SearchContainer } from "./style";

export function Search() {
  
  const { pokeInfos, setPokeSearch, pokeCheck} = UseInfo();

  function handleFilter(valor:string) {
    let pokeTemp:string[] = [];

    if(pokeCheck.length > 0){
      pokeTemp = pokeCheck
    }else{
      pokeTemp = pokeInfos
    }

    pokeTemp = pokeTemp.filter((pokemon:any)=>{
      if (pokemon.name.includes(valor.toLowerCase())) {
        return pokemon
      }
    })    
   
    setPokeSearch(pokeTemp)

  }
  
  return (
    <SearchContainer>
      <input type="text" placeholder="Search by name"
        onChange={(event) => {
          const valor = event.target.value;          
          handleFilter(valor);
        }}
      />
    </SearchContainer>
  )
}