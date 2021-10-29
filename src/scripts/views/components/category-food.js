class CategoryFood extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<section class=" section section_category">
        <div class="container">
            <h2 class="section__title" tabindex="0">Restoran berdasarkan kategori</h2>
            <div class="category-wrapper">
                <div class="category__option category__option--first">
                    <picture>
                        <source type="image/webp" srcset="images/category/cat_jawa.webp">
                        <source type="image/jpeg" srcset="images/category/cat_jawa.png">
                        <img class="lazyload category__option__img" src="images/utils/placeholder.png" 
                        data-src="images/category/cat_jawa.png" alt="">
                    </picture>
                    <a class="category__option__link" href="/#/search/jawa">
                        <span class="visually-hidden">kategori</span>
                        <span class="category__option__text">Jawa</span>
                    </a>
                </div>
                <div class="category__option">
                    <picture>
                        <source type="image/webp" srcset="images/category/cat_italia.webp">
                        <source type="image/jpeg" srcset="images/category/cat_italia.png">
                        <img class="lazyload category__option__img" src="images/utils/placeholder.png" 
                        data-src="images/category/cat_italia.png" alt="">
                    </picture>
                    <a class="category__option__link" href="/#/search/italia">
                        <span class="visually-hidden">kategori</span>
                        <span class="category__option__text">Italia</span>
                    </a>
                </div>
                <div class="category__option">
                <picture>
                    <source type="image/webp" srcset="images/category/cat_bali.webp">
                    <source type="image/jpeg" srcset="images/category/cat_bali.png">
                    <img class="lazyload category__option__img" src="images/utils/placeholder.png" 
                    data-src="images/category/cat_bali.png" alt="">
                </picture>
                    <a class="category__option__link" href="/#/search/bali">
                        <span class="visually-hidden">kategori</span>
                        <span class="category__option__text">Bali</span>
                    </a>
                </div>
                <div class="category__option">
                <picture>
                    <source type="image/webp" srcset="images/category/cat_modern.webp">
                    <source type="image/jpeg" srcset="images/category/cat_modern.png">
                    <img class="lazyload category__option__img" src="images/utils/placeholder.png" 
                data-src="images/category/cat_modern.png" alt="">
                </picture>
                    <a class="category__option__link" href="/#/search/modern">
                        <span class="visually-hidden">kategori</span>
                        <span class="category__option__text">Modern</span>
                    </a>
                </div>
                <div class="category__option">
                <picture>
                    <source type="image/webp" srcset="images/category/cat_soup.webp">
                    <source type="image/jpeg" srcset="images/category/cat_soup.png">
                    <img class="lazyload category__option__img" src="images/utils/placeholder.png" 
                    data-src="images/category/cat_soup.png" alt="">
                </picture>
                    <a class="category__option__link" href="/#/search/sunda">
                        <span class="visually-hidden">kategori</span>
                        <span class="category__option__text">Sunda</span>
                    </a>
                </div>
            </div>
        </div>
    </section>`;
  }
}

customElements.define('categoryfood-comp', CategoryFood);
