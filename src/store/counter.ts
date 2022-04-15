import { defineStore } from 'pinia';
// export default defineStore('counter', () => {
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }
  return { count, increment };
});
