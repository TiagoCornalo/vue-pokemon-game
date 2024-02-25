<template>
  <div class="pokemon-container">
    <Skeleton v-if="loading" class="w-[200px] h-[200px]" />
    <template v-else>
      <img :src="pokemonImage" alt="Pokemon" class="hidden-pokemon" />
      <img v-if="showPokemon" :src="pokemonImage" alt="Pokemon" class="fade-in" />
    </template>
  </div>
</template>

<script lang="ts">
import { Skeleton } from '@/components'

export default {
  components: {
    Skeleton
  },

  props: {
    pokemonId: {
      type: Number,
      required: true,
      default: 0
    },
    showPokemon: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    pokemonImage() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemonId}.png`
    }
  }
}
</script>

<style scoped>
.pokemon-container {
  align-items: center;
  display: flex;
  height: 200px;
  justify-content: center;
  margin: 20px 0;
}

img {
  height: 200px;
  position: absolute;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}

.hidden-pokemon {
  filter: brightness(0) invert(1);
}
</style>
