class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="hero-container">
                      <img class="hero-image" src="images/heros/hero-image_2.jpg" alt="makanan dimeja" style="width:100%;">     
                      <div class="centered">
                              <img class="hero-icon" src="images/icons/home-icon.svg" alt="icon kulinary" srcset="">
                          <h1>Temukan restoran yang akan menjadi <span class="hero-span">Favoritmu!</span></h1>
                          <p>Tidak bingung lagi mau makan apa!</p>
                      </div>
                    </div>`;
  }
}

customElements.define('hero-comp', Hero);
