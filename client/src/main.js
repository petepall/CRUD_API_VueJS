import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@fortawesome/fontawesome-free/css/all.css';
// eslint-disable-next-line import/extensions
import '@fortawesome/fontawesome-free/js/all.js';

import 'bulma/css/bulma.css';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
