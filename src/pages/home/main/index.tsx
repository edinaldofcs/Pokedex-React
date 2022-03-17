import { useEffect } from "react"
import { BackGroundImage } from "../../../assets/icons"
import { ButtonSee } from "../../../components/Button/style"
import { Search } from "../../../components/search"
import { UseInfo } from "../../../context/context"
import { findPokemons } from "../../../services/index_API"
import { PokeObject } from "../../../typing"
import { FooterMain } from "./footer"
import { MainContainer, Types } from "./style"

const amount: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export function Main() {
  const { setPokeInfos } = UseInfo()
  const { pokeSearch, setPokeSearch } = UseInfo();
  const { firstPokemonNumber } = UseInfo();
  const { maxPokemonsPerPage } = UseInfo();

  useEffect(() => {
    const fetchData = async () => {
      const data: Array<PokeObject> = await findPokemons();
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
            pokeSearch.map((pokemon: PokeObject, index: number) =>
              index >= firstPokemonNumber && index < maxPokemonsPerPage &&
              (
                <div key={pokemon.name + Math.random()} className={`card${index + 1}`}>
                  <div className='pokecards__container'>
                    <BackGroundImage cor={pokemon.type[0]} />
                    <img src={pokemon.image} alt={pokemon.name} />
                  </div>
                  <p>{pokemon.name}</p>
                  <div className='pokecards__types'>
                    <Types color={pokemon.type[0]}>{pokemon.type[0]}</Types>
                    {pokemon.type.length === 2 &&
                      <Types color={pokemon.type[1]}>{pokemon.type[1]}</Types>
                    }
                  </div>
                  <ButtonSee>See more</ButtonSee>
                </div>)
            ))
            : pokeSearch && pokeSearch.length === 0 ? (
              <h1 style={{color: '#777', textAlign: 'center'}}>No pokémon found</h1>
            )
            :
            (
              amount.map((number) => (
                <div key={number + Math.random()} className={`card${number}`}>
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