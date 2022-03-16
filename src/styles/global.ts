export const Theme = {
  colors: {
    primary: 'black',
    secondary: 'red',
    backgrounds: {
      primary: 'linear-gradient(270deg, #44CCA6 0%, #BBD995 100%)',
    },
    shadows: {
      primary: 'rgba(69, 62, 7, 0.3)',
    },
    text: {
      primary: '#121212',
    }
  },
  pokecolors: {
    normal: "#a4acaf",
    fighting: "#d56723",
    flying: "#A891EC",
    ground: "#ab9842",
    ghost: "#70559B",
    fire: "#F57D31",
    grass: "#74CB48",
    psychic: "#FB5584",
    dragon: "#53a4cf",
    fairy: "#fdb9e9",
    poison: "#A43E9E",
    rock: "#a38c21",
    steel: "#9eb7b8",
    water: "#6493EB",
    electric: "#eed535",
    ice: "#51c4e7",
    dark: "#75574C",
    bug: "#A7B723",
  }
}

export const RGBAConverter = (hex:string):string => {
  var r:string = `${parseInt((hex[1] + hex[2]), 16)}`
  var g:string = `${parseInt((hex[3] + hex[4]), 16)}`
  var b:string = `${parseInt((hex[5] + hex[6]), 16)}`
  var RGBA:string = `rgba(${r},${g},${b},0.3)`
  return RGBA
}

// interface Theme{
//   colors: {
//     primary: string,
//     secondary: string,
//     backgrounds:{
//       primary: string,
//       secondary?: string,
//     }
//     shadows:{
//       primary: string,
//     },
//     text:{
//       primary: string,
//     }
//   }
// }