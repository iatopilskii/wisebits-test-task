import { writable } from 'svelte/store'
import { ICardStore } from './types'
import { TGetCoffeeCardReturn } from 'api/getCoffeeCard/types'

const { subscribe, update } = writable<ICardStore>({ cards: [], isLoading: false })

const cardStore = {
  subscribe,
  addCard: (card: TGetCoffeeCardReturn) => update((prev) => {
    const cards = [...prev.cards]
    cards.push(card)
    return { ...prev, cards }
  }),
  setIsLoading: (isLoading: boolean) => update((prev) => {
    return { ...prev, isLoading }
  })
}

export default cardStore
