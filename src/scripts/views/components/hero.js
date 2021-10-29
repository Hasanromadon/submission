class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="hero-container">    
                      <picture>
                        <source type="image/jpeg" media="(max-width: 600px)" srcset="images/heros/hero-image-small.jpg">
                        <source type="image/webp" media="(max-width: 600px)" srcset="images/heros/hero-image-small.webp">
                        <source type="image/webp" srcset="images/heros/hero-image-large.jpg">
                        <img class="hero-image" style="width:100%;" src="images/heros/hero-image-large.jpg" alt="makanan dimeja"></img>
                      </picture>
                      <div class="centered">
                              <img class="hero-icon" src="images/icons/home-icon.svg" alt="icon kulinary" srcset="">
                          <h1>Temukan restoran yang akan menjadi <span class="hero-span">Favoritmu!</span></h1>
                          <p>Tidak bingung lagi mau makan apa!</p>
                      </div>
                    </div>`;
  }
}

customElements.define('hero-comp', Hero);
