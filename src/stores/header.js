import { defineStore } from 'pinia'
import { markRaw } from 'vue'

export const useHeaderStore = defineStore('header', {
  state: () => ({
    leftContent: null
  }),
  actions: {
    setLeftContent(content) {
      this.leftContent = markRaw(content)
    },
    clearContents() {
      this.leftContent = null
    }
  }
})
