import { focustoElement } from '../../utils/scroll-page';

class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
    focustoElement('.skip-link', '#mainContent');
  }

  render() {
    this.innerHTML = `
    <button class="skip-link" tabindex="0" data-link="mainContent" >LEWATI KE KONTEN UTAMA</button>
    <header class="app-bar">
    <div class="container app-bar__container">
      <div class="app-bar__brand">
      <a href="#/"> <img src="images/icons/logo.png" alt="logo" srcset=""></a>
      </div>
      <nav id="navigationDrawer" class="app-bar__navigation">
          <ul>
              <li><a href="#/home" >Beranda</a></li>
              <li><a href="#/favorite">Favorit</a></li>
              <li><a href="https://www.linkedin.com/in/hasan-romadon/" target="_blank" rel="noopener">Tentang</a></li>
          </ul>
      </nav>
      <div class="app-bar__menu">
      <button id="hamburgerButton">☰</button>
      </div>
    </div>
    </header>`;
  }
}

customElements.define('navbar-comp', Navbar);
