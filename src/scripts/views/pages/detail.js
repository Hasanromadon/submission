import UrlParser from '../../routes/url-parser';
import { detailRestaurant, errorPage, sidebarRestaurantCard } from '../templates/template-creator';
import RestaurantSource from '../../data/restaurant-source';
import { scrollPage } from '../../utils/scroll-page';
import ctrlFavorite from '../../utils/favorite-initiator';
import submitReview from '../../utils/submit-review';

const Detail = {
  async render() {
    return `
    <div class="container">
      <div id="detail" class="detail__wrapper">
          <main class="detail__display main-detail">
          <loading-comp></loading-comp>
                  <!-- detail restaurant -->
          </main>
          <aside class="detail__display">
              <h3 class="section__title" tabindex="0">Rekomondasi lainnya</h3>
              <div class="sidebar__wrapper">
                      <!-- sidebar content -->
              </div>
          </aside>
        </div>
    </div>
    `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      // detail
      const detailContainer = document.querySelector('.detail__display');
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      detailContainer.innerHTML = detailRestaurant(restaurant);
      // sideview
      const sidebarContainer = document.querySelector('.sidebar__wrapper');
      const recommendedRestaurants = await RestaurantSource.recommendedRestaurants(url.id);
      recommendedRestaurants.forEach((recommendRes) => {
        sidebarContainer.innerHTML += sidebarRestaurantCard(recommendRes);
      });
      // add util functions
      ctrlFavorite(restaurant, url.id);
      scrollPage('.detail__nav__link', 'data-link');
      submitReview(url.id);
      window.scrollTo(0, 0);
    } catch (err) {
      const detailWrapper = document.querySelector('.detail__wrapper');
      detailWrapper.innerHTML = errorPage('Upps, Silahkan coba kembali');
    }
  },
};

export default Detail;
