import getCoffeeCard from 'api/getCoffeeCard'
import cardStore from 'stores/cards'
import intervalTaskStore from 'stores/intervalTask'

const addNewCard = () => {
  cardStore.setIsLoading(true)
  intervalTaskStore.clearInterval()

  const cardPromise = getCoffeeCard()
  cardStore.addCard(cardPromise)

  cardPromise.then(() => {
    cardStore.setIsLoading(false)
    intervalTaskStore.setInterval()
  })
}

export default addNewCard
