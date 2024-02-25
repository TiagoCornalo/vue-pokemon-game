<template>
  <div class="pokemon-page-container">
    <PokemonGame />
    <PokemonScore />
  </div>
</template>

<script lang="ts">
import { PokemonGame, PokemonScore } from '@/components'

export default {
  name: 'PokemonPage',
  components: {
    PokemonGame,
    PokemonScore
  }
}
</script>

<style scoped>
.pokemon-page-container {
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}
</style>
