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
                                <a class="nav-footer__link" href="#/home">Beranda</a>
                            </li>
                            <li class="nav-footer__item">
                                <a class="nav-footer__link" href="#/favorite">Favorite</a>
                            </li>
                            <li class="nav-footer__item">
                                <a class="nav-footer__link"  href="https://www.linkedin.com/in/hasan-romadon/" target="_blank" rel="noopener" >Tentang</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="footer__social-media">
                    <p class="footer__title">Kontak kami</p>
                    <ul class="footer__social-media__list">
                        <li> <a href="#" class="footer__social-media__list__link" > <img src="images/icons/icon-fb.png" alt="facebook"></a></li>
                        <li> <a href="#" class="footer__social-media__list__link" > <img src="images/icons/icon-ig.png" alt="instagram"></a></li>
                        <li> <a href="#" class="footer__social-media__list__link" > <img src="images/icons/icon-tw.png" alt="twitter"> </a></li>
                    </ul>
                </div>
                <div class="footer__about">
                    <img class="footer__logo" src="images/icons/logo.png" alt="">
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
