import homeIcon from '../../public/images/icons/home-icon.svg';
import heroImage from '../../public/images/heros/hero-image_2.jpg';


class Hero extends HTMLElement {
  constructor() {
    super();

  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="hero-container">
      <img class="hero-image" src="${heroImage}" alt="makanan dimeja" style="width:100%;">     
      <div class="centered">
              <img class="hero-icon" src="${homeIcon}" alt="" srcset="">
          <h1>Temukan restoran yang akan menjadi <span class="hero-span">Favoritmu!</span></h1>
           <p>Tidak bingung lagi mau makan apa!</p>
      </div>
    </div>`;
  }
}

customElements.define('hero-comp', Hero);
