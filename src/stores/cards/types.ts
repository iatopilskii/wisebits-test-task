import { TGetCoffeeCardReturn } from 'api/getCoffeeCard/types';

export interface ICardStore {
  cards: TGetCoffeeCardReturn[]
  isLoading: boolean
}
