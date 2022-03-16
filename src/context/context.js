import React, { createContext, useState, useContext } from 'react'

const PokeContext = createContext();

export default function ContextProvider({ children }) {
  const [pokeInfos, setPokeInfos] = useState();
  const [pokeSearch, setPokeSearch] = useState();
  const [firstPokemonNumber, setFirstPokemonNumber] = useState(0);
  const [amount, setAmount] = useState(12);
  const [maxPokemonsPerPage, setMaxPokemonsPerPage] = useState(amount);
  const [pokeCheck, setPokeCheck] = useState([]);
  const [restrict, setRestrict] = useState(false);
  const [list, setList] = useState([]);
  


  return (
    <PokeContext.Provider
      value={{
        pokeInfos, setPokeInfos, pokeSearch, setPokeSearch,
        firstPokemonNumber, setFirstPokemonNumber, pokeSearch, maxPokemonsPerPage, setMaxPokemonsPerPage, amount, setAmount, pokeCheck, setPokeCheck
        , restrict, setRestrict, list, setList
      }}
    >
      {children}
    </PokeContext.Provider>
  )

}

export function UseInfo() {
  const test = useContext(PokeContext);
  const { pokeInfos, setPokeInfos, pokeSearch, setPokeSearch, firstPokemonNumber, setFirstPokemonNumber, maxPokemonsPerPage, setMaxPokemonsPerPage, amount, setAmount
    , pokeCheck, setPokeCheck, restrict, setRestrict, list, setList } = test
  return {
    pokeInfos, setPokeInfos, pokeSearch, setPokeSearch, firstPokemonNumber, setFirstPokemonNumber, maxPokemonsPerPage, setMaxPokemonsPerPage, amount, setAmount
    , pokeCheck, setPokeCheck, restrict, setRestrict, list, setList
  };
}