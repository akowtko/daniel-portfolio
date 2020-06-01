import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const opts = {
  theme: {
    options: {
      customProperties: true,
    },
    light: true,
    themes: {
      light: {
        primary: '#003142', // Want this to be dark blue instead
        accent: '#931F28',
        secondary: '#03BBC1',
        terciary: '#306b93',
        info: '#03A9F4',
        warning: '#FFB300',
        error: '#F44336',
        success: '#00C853',
        background: '#FAFAFA',
      },
      dark: {
        primary: '#003142', // Want this to be dark blue instead
        accent: '#931F28',
        secondary: '#03BBC1',
        terciary: '#306b93',
        info: '#03A9F4',
        warning: '#FFB300',
        error: '#F44336',
        success: '#00C853',
        background: '#FAFAFA',
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
};

export default new Vuetify(opts);
