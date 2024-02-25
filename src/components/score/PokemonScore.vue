<template>
  <div class="score-container">
    <Card>
      <CardHeader>
        <CardTitle class="text-2xl">Puntaje: {{ useScore.score }}</CardTitle>
      </CardHeader>
    </Card>
  </div>
</template>

<script lang="ts">
import { Card, CardHeader, CardTitle } from '@/components'
import { useScoreStore } from '@/store'

export default {
  name: 'PokemonScore',

  components: {
    Card,
    CardHeader,
    CardTitle
  },

  data() {
    return {
      useScore: useScoreStore()
    }
  }
}
</script>

<style scoped>
.score-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
}
</style>
