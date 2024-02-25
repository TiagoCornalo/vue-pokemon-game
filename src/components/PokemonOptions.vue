<template>
  <div class="options-container">
    <Button
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      class="w-[250px] uppercase"
      variant="outline"
    >
      {{ pokemon.name }}
    </Button>
  </div>
</template>

<script lang="ts">
import { Button } from './ui/button'
import { type Pokemon } from '@/types'

export default {
  name: 'PokemonOptions',
  components: {
    Button
  },

  props: {
    pokemons: {
      type: Array as () => Pokemon[],
      required: true
    }
  }
}
</script>

<style scoped>
.options-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
}
</style>
