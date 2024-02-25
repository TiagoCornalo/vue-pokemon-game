import { defineStore } from 'pinia'

export const useScoreStore = defineStore('score', {
  state: () => ({
    score: Number(localStorage.getItem('score')) || 0
  }),
  actions: {
    increment() {
      this.score += 100
      this.updateLocalStore()
    },
    updateLocalStore() {
      localStorage.setItem('score', this.score.toString())
    }
  }
})
