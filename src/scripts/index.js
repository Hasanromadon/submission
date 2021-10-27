import 'regenerator-runtime';
import '../styles/main.scss';
import App from './views/app';
import './views/components/navigation';
import './views/components/hero';
import registerServiceWorker from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  registerServiceWorker();
});
