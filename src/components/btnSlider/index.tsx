import { UseInfo } from "../../context/context";
import { PokeObject } from "../../typing";
import { SliderContainer } from "./style";


export function BtnSlider() {
  const { restrict, setRestrict } = UseInfo();
  const { pokeInfos } = UseInfo()
  const { setPokeSearch } = UseInfo();
  const { setPokeCheck } = UseInfo();
  const { list } = UseInfo();

  function handleChange() {
    setPokeCheck([])
    const validate: boolean = !restrict

    let pokeFilter: Array<PokeObject>
    
    if (validate) {
      pokeFilter = checkFilterByType(list)        
    }else{
      pokeFilter = checkFilter(list)
    }

    setPokeCheck(pokeFilter)
    setRestrict(!restrict)

    if(list.length === 0 && !validate) return setPokeSearch(pokeInfos )      
    
    setPokeSearch(pokeFilter)
  }

  function checkFilter(array: string[]) {
    var arrayTemp: Array<PokeObject> = [];
    pokeInfos.filter(function (pokemon: PokeObject) {
      if (array.includes(pokemon.type[0]) || array.includes(pokemon.type[1])
        && pokemon.type[1]) {
        arrayTemp.push(pokemon)
      }

    })
    return arrayTemp
  }

  function checkFilterByType(array: string[]) {
    var arrayTemp: Array<PokeObject> = [];

    pokeInfos.filter(function (pokemon: PokeObject) {
      var isAvailable: boolean = true

      if (array.length === 1) {
        if (pokemon.type.length == 1) {
          array[0] != pokemon.type[0] && (isAvailable = false)
        } else {
          isAvailable = false
        }
      } else {
        array.forEach((item) => {
          if (item === pokemon.type[0] || (item === pokemon.type[1] && pokemon.type[1])) {

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
    <SliderContainer>
      <h3>Restrict types</h3>
      <label>
        <input type={'checkbox'}
          onClick={handleChange} />
        <span className="round"></span>
      </label>
    </SliderContainer>
  )
}