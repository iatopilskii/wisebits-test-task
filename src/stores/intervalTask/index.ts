import addNewCard from 'helpers/addNewCard';
import { writable } from 'svelte/store';

const INTERVAL_TIME = 30 * 1000;

const { subscribe, set, update } = writable<NodeJS.Timeout>();

const intervalTaskStore = {
  subscribe,
  setInterval: () => set(setInterval(() => {
    addNewCard();
  }, INTERVAL_TIME)),
  clearInterval: () => update((interval) => {
    clearInterval(interval);
    return undefined;
  }),
};

export default intervalTaskStore;
