import logo from '../../public/images/icons/logo.png';
import iconMenu from '../../public/images/utils/icon-menu.svg';
import { drawerHelper } from '../helpers';


class Navbar extends HTMLElement {
  constructor() {
    super();

  }
  connectedCallback() {
    this.render();
    drawerHelper();
  }

  render() {
    this.innerHTML = ` <a class="skip-link" tabindex="0" href="#main">LEWATI KE KONTEN UTAMA</a>
        <header>
            <div class="navbar container">
                <a class="logo" href="/">
                    <img src="${logo}" alt="logo kulinary" />
                </a>
                <nav>
                    <ul class="nav-list">
                      <li class="nav-list__item">
                        <a class="nav__link" href="/">Beranda</a>
                      </li>
                      <li class="nav-list__item">
                        <a class="nav__link" href="#">Favorit</a>
                      </li>
                      <li class="nav-list__item">
                        <a class="nav__link" target="_blank" href="https://www.linkedin.com/in/hasan-romadon/">Tentang</a>
                      </li>
                    </ul>
                </nav>
                <button aria-label="buka menu" id="hamburger" class="icon-menu"><img src="${iconMenu}"
                        alt="" />
                </button>
            </div>
        </header>
        <nav id="drawer">
            <ul>
              <li class="drawer__list"><a href="/"></a> Beranda</li>
              <li class="drawer__list"><a href="#"></a> Favorit</li>
              <li class="drawer__list"><a href="https://www.linkedin.com/in/hasan-romadon/" target="_blank"></a> Tentang</li>
            </ul>
        </nav>`;
  }
}

customElements.define('navbar-comp', Navbar);
