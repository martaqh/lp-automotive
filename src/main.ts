import './styles/index.scss';

import 'vuetify/dist/vuetify.min.css';

import { createApp } from 'vue';
import App from './App.vue';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

const app = createApp(App);

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',

    aliases,
    sets: {
      mdi
    }
  },
  components,
  directives
});

vuetify.icons.marked = 'mdi-home';

app.use(vuetify);

app.mount('#app');
