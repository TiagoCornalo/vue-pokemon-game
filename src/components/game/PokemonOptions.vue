<template>
  <div class="options-container">
    <template v-for="pokemon in pokemons" :key="pokemon.id">
      <Skeleton v-if="loading" class="w-[250px] h-8" />
      <Button
        v-else
        @click="$emit('pokemon-selection', pokemon.id)"
        class="w-[250px] uppercase"
        variant="outline"
        :disabled="showAnswer"
      >
        {{ pokemon.name }}
      </Button>
    </template>
  </div>
</template>

<script lang="ts">
import { Button, Skeleton } from '@/components'
import { type Pokemon } from '@/types'

export default {
  name: 'PokemonOptions',
  components: {
    Button,
    Skeleton
  },

  props: {
    pokemons: {
      type: Array as () => Pokemon[],
      required: true
    },
    loading: {
      type: Boolean,
      default: true
    },
    showAnswer: {
      type: Boolean,
      default: false
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
