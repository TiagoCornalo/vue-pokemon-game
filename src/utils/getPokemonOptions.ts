import pokemonApi from '@/api/pokemonApi'

const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650))

  return pokemonsArr.map((_, index) => index + 1)
}

const getPokemonsNames = async (pokemons: number[]) => {
  const promises = pokemons.map((pokemon) => pokemonApi.get(`/${pokemon}`))
  const pokemonsArr = await Promise.all(promises)

  return pokemonsArr.map((pokemon) => {
    return {
      id: pokemon.data.id,
      name: pokemon.data.name
    }
  })
}

const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
  const pokemons = await getPokemonsNames(mixedPokemons.splice(0, 4))

  return pokemons
}

export default getPokemonOptions
