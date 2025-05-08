import { defineStore } from 'pinia'
import { markRaw } from 'vue'

export const useHeaderStore = defineStore('header', {
  state: () => ({
    leftContent: null,
    rightContent: null
  }),
  actions: {
    setLeftContent(content) {
      this.leftContent = markRaw(content)
    },
    setRightContent(content) {
      this.rightContent = markRaw(content)
    },
    clearContents() {
      this.leftContent = null
      this.rightContent = null
    }
  }
})
