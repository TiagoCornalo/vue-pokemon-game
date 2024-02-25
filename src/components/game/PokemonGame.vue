<template>
  <div class="game-container">
    <Skeleton v-if="loading" class="w-[300px] h-8" />
    <h1 v-else class="text-3xl">¿Quién es ese Pokémon?</h1>
    <PokemonPicture :pokemon-id="pokemon?.id" :show-pokemon="showPokemon" :loading="loading" />
    <PokemonOptions
      :pokemons="pokemons"
      :loading="loading"
      :show-answer="showAnswer"
      @pokemon-selection="pokemonSelectionCheck"
    />
    <template v-if="showAnswer">
      <h2 class="text-xl">
        {{ message }}
      </h2>
      <Button @click="nextPokemon" class="uppercase" variant="outline"> Siguiente Pokémon </Button>
    </template>
  </div>
</template>

<script lang="ts">
import PokemonPicture from './PokemonPicture.vue'
import PokemonOptions from './PokemonOptions.vue'
import { Skeleton, Button } from '@/components'
import { getPokemonOptions } from '@/utils'
import { type Pokemon } from '@/types'
import { useScoreStore } from '@/store'

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
    Skeleton,
    Button
  },

  data() {
    return {
      pokemons: [] as Pokemon[],
      pokemon: null as Pokemon | null,
      showPokemon: false,
      showAnswer: false,
      message: '',
      loading: true,
      useScore: useScoreStore()
    }
  },

  methods: {
    async getMixedPokemons() {
      this.pokemons = await getPokemonOptions()

      const rndIndex = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemons[rndIndex]

      this.loading = false
    },

    pokemonSelectionCheck(id: number) {
      this.showPokemon = true
      this.showAnswer = true

      if (id === this.pokemon?.id) {
        this.useScore.increment()
        this.message = `¡Correcto! ${this.pokemon?.name.toUpperCase()} es el Pokémon correcto`
      } else {
        this.message = `¡Incorrecto! El Pokémon correcto es ${this.pokemon?.name.toUpperCase()}`
      }
    },

    async nextPokemon() {
      this.loading = true
      this.showPokemon = false
      this.showAnswer = false
      await this.getMixedPokemons()
    }
  },

  mounted() {
    this.getMixedPokemons()
  }
}
</script>

<style scoped>
.game-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  width: 500px;
}
</style>
