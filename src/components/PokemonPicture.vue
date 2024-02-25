<template>
  <div class="pokemon-container">
    <Skeleton v-if="loading" class="w-[200px] h-[200px]" />
    <div v-else class="picture-container">
      <img :src="pokemonImage" alt="Pokemon" class="hidden-pokemon" />
      <img v-if="showPokemon" :src="pokemonImage" alt="Pokemon" class="fade-in" />
    </div>
  </div>
</template>

<script lang="ts">
import { Skeleton } from '.'

export default {
  components: {
    Skeleton
  },

  props: {
    pokemonId: {
      type: Number,
      required: true
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
  display: flex;
  height: 200px;
  margin: 20px 0;
}

.picture-container {
  display: flex;
  justify-content: center;
  align-items: center;
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
