import { useEffect, useState } from "react"
import { BackGroundImage } from "../../../assets/icons"
import { ButtonSee } from "../../../components/Button/style"
import { Search } from "../../../components/search"
import { UseInfo } from "../../../context/context"
import { findPokemons } from "../../../services/index_API"
import { FooterMain } from "./footer"
import { MainContainer, Types } from "./style"


const amount: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
type objPokemon = {
  name: string;
  image: string;
  type: string[];
}

export function Main() {
  const { pokeInfos, setPokeInfos } = UseInfo()
  const { pokeSearch, setPokeSearch } = UseInfo();
  const { firstPokemonNumber, setFirstPokemonNumber } = UseInfo();
  const { maxPokemonsPerPage, setMaxPokemonsPerPage } = UseInfo();

  useEffect(() => {
    const fetchData = async () => {
      const data: any = await findPokemons();
      setPokeInfos(data);
      setPokeSearch(data);
    }

    fetchData()
      .catch(console.error);

  }, [])

  return (
    <MainContainer>
      {/* {console.log(pokeSearch.length)} */}
      <section>
        <Search />
        <section className='pokecards'>          
          {pokeSearch && pokeSearch.length > 0 ? (         
            pokeSearch.map((element: objPokemon, index: number) =>
              index >= firstPokemonNumber && index < maxPokemonsPerPage &&
              (
                <div key={element.name + Math.random()} className={`card${index + 1}`}>
                  <div className='pokecards__container'>
                    <BackGroundImage cor={element.type[0]} />
                    <img src={element.image} alt={element.name} />
                  </div>
                  <p>{element.name}</p>
                  <div className='pokecards__types'>
                    <Types color={element.type[0]}>{element.type[0]}</Types>
                    {element.type.length == 2 &&
                      <Types color={element.type[1]}>{element.type[1]}</Types>
                    }
                  </div>
                  <ButtonSee>See more</ButtonSee>
                </div>)
            ))
            : pokeSearch && pokeSearch.length == 0 ? (
              <h1 style={{color: '#777', textAlign: 'center'}}>No pokémon found</h1>
            )
            :
            (
              amount.map((element) => (
                <div key={element + Math.random()} className={`card${element}`}>
                  <div className='pokecards__container'>
                    <BackGroundImage cor={'#ffffff'} />
                    <img src={'https://easy.nic.in/EASY-CabSec/Content/loader-img/loading.gif'} alt={'loading'} data-img />
                  </div>
                  <p>pokémon</p>
                  <div className='pokecards__types'>
                    <span color={'fire'}>type</span>
                    <span color={'fire'}>type</span>
                  </div>
                  <ButtonSee>See more</ButtonSee>
                </div>
              ))
            )
          }
        </section>
        <FooterMain />
      </section>
    </MainContainer>
  )
}