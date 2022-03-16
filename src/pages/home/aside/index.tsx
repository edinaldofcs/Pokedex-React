import { useState } from "react";
import { BtnSlider } from "../../../components/btnSlider";
import { UseInfo } from "../../../context/context";
import { AsideContainer } from "./style";

const types: Array<string> = ["normal", "fighting", "flying", "ground", "ghost", "fire", "grass",
  "psychic", "dragon", "fairy", "poison", "rock", "steel", "water",
  "electric", "ice", "dark", "bug"
];
export function Aside() {
  const { pokeInfos, setPokeSearch, setPokeCheck, setList, restrict } = UseInfo();
  
  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(types.length).fill(false)
  );

  const handleOnChange = (position: number, event: any) => {
    setPokeCheck([])
    setPokeSearch(pokeInfos)

    const updatedCheckedState: boolean[] = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState)

    let listTemp: string[] = getSelectedTypes(updatedCheckedState)
    setList(getSelectedTypes(updatedCheckedState))
    let pokeTemp: string[] = [];

    if(restrict){
      pokeTemp = checkFilterByType(listTemp)
    }else{
      pokeTemp = checkFilter(listTemp)
    }

    setPokeCheck(pokeTemp)

    if (pokeTemp.length > 0) {
      setPokeSearch(pokeTemp)
      return
    }
    setPokeSearch(pokeInfos)

  };

  function getSelectedTypes(booleanList: boolean[]) {
    let list: string[] = []
    booleanList.map((item, index) => {
      if (item == true) {
        list.push(types[index])
      }
    }
    )
    return list
  }

  function checkFilter(array: string[]) {
    var arrayTemp: any = [];
    pokeInfos.filter(function (pokemon: any) {
      if (array.includes(pokemon.type[0]) || array.includes(pokemon.type[1])
        && pokemon.type[1]) {
        arrayTemp.push(pokemon)
      }

    })
    return arrayTemp
  }

  function checkFilterByType(array: string[]) {
    var arrayTemp: string[] = [];

    pokeInfos.filter(function (pokemon:any) {
      var isAvailable:boolean = true

      if (array.length == 1) {
        if (pokemon.type.length == 1) {
          array[0] != pokemon.type[0] && (isAvailable = false)
        }else{
          isAvailable = false
        }
      } else {
        array.forEach((item) => {
          if (item == pokemon.type[0] || (item == pokemon.type[1] && pokemon.type[1])) {

          } else {
            isAvailable = false
          }
        })
      }

      isAvailable && arrayTemp.push(pokemon);
    })   

    return arrayTemp
  }

  return (
    <AsideContainer>
      <div>
        <details open>
          <summary>
            <h2>Pokémon Type</h2>
          </summary>
          {types.map((pokeType: string, index: number) => (
            <div key={pokeType + Math.random()}>
              <input type={'checkbox'} id={pokeType} name={pokeType}
                checked={checkedState[index]}
                onChange={(event) => handleOnChange(index, event)} />
              <label htmlFor={pokeType}>{pokeType}</label>
            </div>
          ))}
        </details>
        <BtnSlider />
      </div>
    </AsideContainer>
  )
}