import logo from '../../public/images/icons/logo.png';
import iconFb from '../../public/images/icons/icon-fb.png';
import iconIg from '../../public/images/icons/icon-ig.png';
import iconTw from '../../public/images/icons/icon-tw.png';

class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<footer class="footer">
        <div class="container">
                <div class="footer__wrapper">
    
                    <div class="footer__site">
                        <p class="footer__title">Sitemap</p>
                        <nav>
                            <ul class="nav-footer">
                                <li class="nav-footer__item">
                                    <a class="nav-footer__link" href="/">Beranda</a>
                                </li>
                                <li class="nav-footer__item">
                                    <a class="nav-footer__link" href="/">Favorite</a>
                                </li>
                                <li class="nav-footer__item">
                                    <a class="nav-footer__link" href="/">Tentang</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="footer__social-media">
                        <p class="footer__title">Kontak kami</p>
                        <ul class="footer__social-media__list">
                            <li> <a href="#" class="padding-link"> <img src="${iconFb}" alt="facebook"></a></li>
                            <li> <a href="#" class="padding-link"> <img src="${iconIg}" alt="instagram"></a></li>
                            <li> <a href="#" class="padding-link"> <img src="${iconTw}" alt="twitter"> </a></li>
                        </ul>
                    </div>
                    <div class="footer__about">
                        <img class="footer__logo" src="${logo}" alt="logo kulinary">
                        <p class="footer__about">Kulinary adalah sebuah website untuk mendapatkan informasi
                            restoran-restoran
                            kekinian dan terlengkap.</p>
                        <p class="footer__about">Copyright © 2021 - Kurinary</p>
                    </div>
                </div>
            </div>
        </footer>`;
    }
  }
  
  customElements.define('footer-comp', Footer);
  