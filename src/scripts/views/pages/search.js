import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { restaurantCard } from '../templates/template-creator';

const Search = {
  async render() {
    return `
        <section class="section section__search">
        <div class="container">
            <h3 class="section__title" tabindex="0"></h3>
            <div class="section__search__wrapper">
            <loading-comp></loading-comp>
                <!-- content -->
            </div>
        </div>
    </section>
    `;
  },

  async afterRender() {
    const resultRestaurantsContainer = document.querySelector('.section__search__wrapper');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantSource.searchRestaurantByCategory(url.id);
    resultRestaurantsContainer.innerHTML = ''; // delete loading
    restaurants.forEach((restaurant) => {
      resultRestaurantsContainer.innerHTML += restaurantCard(restaurant);
    });
    document.querySelector('.section__title').innerHTML = `${restaurants.length} restoran kategori "${url.id}" ditemukan`;
    window.scrollTo(0, 0);
  },
};

export default Search;
