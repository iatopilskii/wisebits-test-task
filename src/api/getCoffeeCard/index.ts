import { COFFEE_API_URL, IMAGE_API_URL } from './constants'
import { TGetCoffeeCardReturn } from './types'

const getCoffeeCard: () => TGetCoffeeCardReturn = () => {
  return Promise.all([
    fetch(COFFEE_API_URL).then(response => response.json()),
    fetch(IMAGE_API_URL).then(response => response.url)
  ]).then(([card, imageUrl]) => {
    return {
      ...card,
      imageUrl,
      notes: card.notes.split(', ')
    }
  })
}

export default getCoffeeCard
