import React, { createContext, useState, useContext } from 'react'
import { PokeObject } from '../typing';

const PokeContext = createContext<any>('');

export default function ContextProvider({ children }:any) {
  const [pokeInfos, setPokeInfos] = useState<PokeObject[]>([]);
  const [pokeSearch, setPokeSearch] = useState<PokeObject[]>([]);
  const [firstPokemonNumber, setFirstPokemonNumber] = useState<number>(0);
  const [amount, setAmount] = useState<number>(12); 
  const [maxPokemonsPerPage, setMaxPokemonsPerPage] = useState<number>(amount);
  const [pokeCheck, setPokeCheck] = useState<PokeObject[]>([]);
  const [restrict, setRestrict] = useState<boolean>(false);
  const [list, setList] = useState<string[]>([]);
  


  return (
    <PokeContext.Provider
      value={{
        pokeInfos, setPokeInfos, pokeSearch, setPokeSearch,
        firstPokemonNumber, setFirstPokemonNumber, maxPokemonsPerPage, setMaxPokemonsPerPage, amount, setAmount, pokeCheck, setPokeCheck
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