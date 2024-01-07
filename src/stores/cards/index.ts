import { writable } from 'svelte/store';
import { TGetCoffeeCardReturn } from 'api/getCoffeeCard/types';
import { ICardStore } from './types';

const { subscribe, update } = writable<ICardStore>({ cards: [], isLoading: false });

const cardStore = {
  subscribe,
  addCard: (card: TGetCoffeeCardReturn) => update((prev) => {
    const cards = [...prev.cards];
    cards.push(card);
    return { ...prev, cards };
  }),
  setIsLoading: (isLoading: boolean) => update((prev) => ({ ...prev, isLoading })),
};

export default cardStore;
