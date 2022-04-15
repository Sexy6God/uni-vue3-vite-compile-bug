import { createSSRApp } from 'vue';
import { setupStore } from '@/store';
import App from './App.vue';
import 'vue-global-api';

export function createApp() {
  const app = createSSRApp(App);
  setupStore(app);
  return { app };
}
