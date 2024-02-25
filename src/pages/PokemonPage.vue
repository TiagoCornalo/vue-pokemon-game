<template>
  <div class="pokemon-page-container">
    <Skeleton v-if="loading" class="w-[300px] h-8" />
    <h1 v-else class="text-3xl">¿Quién es ese Pokémon?</h1>
    <PokemonPicture :pokemonId="4" :showPokemon="true" :loading="loading" />
    <PokemonOptions :pokemons="pokemons" />
  </div>
</template>

<script lang="ts">
import { PokemonPicture, PokemonOptions, Skeleton } from '@/components'
import { getPokemonOptions } from '@/utils'
import { type Pokemon } from '@/types'

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
    Skeleton
  },

  data() {
    return {
      pokemons: [] as Pokemon[],
      pokemon: null as Pokemon | null,
      loading: true
    }
  },

  methods: {
    async getMixedPokemons() {
      this.pokemons = await getPokemonOptions()

      const rndIndex = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemons[rndIndex]

      this.loading = false
    }
  },

  mounted() {
    this.getMixedPokemons()
  }
}
</script>

<style scoped>
.pokemon-page-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}
</style>
