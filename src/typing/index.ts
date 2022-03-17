export interface PokeType{
  name: string,
  pokemon: string[],
}

export interface PokeObject{
  name: string;
  image: string;
  type: string[];
}

export interface Pokemon {
  pokemon: Array<PokeName>,
  name: string
}
export interface PokeName{
  pokemon: {
    name: string
  }
}

export interface ApiResults {
  results: Array<NameUrl>
}

export interface NameUrl{
  name: string,
  url: string,
}
