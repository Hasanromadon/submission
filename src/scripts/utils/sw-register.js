/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import {
  Workbox,
} from 'workbox-window';

const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('sw.js');
    wb.addEventListener('installed', (event) => {
      if (event.isUpdate) {
        window.location.reload();
      }
    });
    wb.register();
  }
};

export default registerServiceWorker;
