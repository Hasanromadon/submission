import FavoriteRestaurantSource from '../../data/local-source';
import { restaurantCard } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <section class="section section__favorite">
        <div class="container">
        <h3 class="section__title" tabindex="0">Restoran Favorit</h3>
            <div class="section__favorite__wrapper">
                <div class="nodata" >
                <h4 class="section__title section__title__favorite" tabindex="0">Belum ada restoran ni</h4>
                <img src="images/icons/icon-nodata.png" alt="seorang koki dengan pisau">
                </div>
            </div>
        </div>
       </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantSource.getAllFavoritesRestaurant();
    const favoritesRestaurantContainer = document.querySelector('.section__favorite__wrapper');
    favoritesRestaurantContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      favoritesRestaurantContainer.innerHTML += restaurantCard(restaurant);
    });
    window.scrollTo(0, 0);
  },
};

export default Favorite;
