import RestaurantSource from '../../data/restaurant-source';
import { restaurantCard } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <hero-comp></hero-comp>
        <categoryfood-comp></categoryfood-comp>
        <section class="section section__popular">
        <div class="container">
            <h3 class="section__title" tabindex="0">Restoran populer baru-baru ini</h3>
            <div class="section__popular__wrapper">
                <!-- content -->
            </div>
        </div>
    </section>
    
    <section class="section section__around">
    <div class="container">
        <div class="section__around__wrapper">
        <div>
          <h3 tabindex="0">Diminati Sekitar</h3>
          <p class="section__sub-title">Restourant yang mungkin kamu akan sukai ada disini</p>
        </div>
        <!-- content -->
        </div>
    </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.allRestaurants();
    const popularRestaurantsContainer = document.querySelector('.section__popular__wrapper');
    restaurants.slice(0, 10).forEach((restaurant) => {
      popularRestaurantsContainer.innerHTML += restaurantCard(restaurant);
    });
    // nearby restaurants
    const nearbyRestaurantsContainer = document.querySelector('.section__around__wrapper');
    const markup = restaurants.slice(10).map((res) => (
      restaurantCard(res)
    )).join(' ');
    nearbyRestaurantsContainer.insertAdjacentHTML('beforeend', markup);
  },
};

export default Home;
