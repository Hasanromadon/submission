import UrlParser from '../../routes/url-parser';
import { detailRestaurant, sidebarRestaurantCard } from '../templates/template-creator';
import RestaurantSource from '../../data/restaurant-source';
import { scrollPage } from '../../utils/scroll-page';
import submitReview from '../../utils/submit-review';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';

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
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    // detail
    const detailContainer = document.querySelector('.detail__display');
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const {
      id, name, description, pictureId, city, rating,
    } = restaurant;
    detailContainer.innerHTML = detailRestaurant(restaurant);
    // sideview
    const sidebarContainer = document.querySelector('.sidebar__wrapper');
    const recommendedRestaurants = await RestaurantSource.recommendedRestaurants(url.id);
    await recommendedRestaurants.forEach((recommendRes) => {
      sidebarContainer.innerHTML += sidebarRestaurantCard(recommendRes);
    });
    // add util functions
    FavoriteButtonPresenter.init({
      favoriteButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id, name, description, pictureId, city, rating,
      },
    });
    scrollPage('.detail__nav__link', 'data-link');
    submitReview(url.id);
    window.scrollTo(0, 0);
  },
};

export default Detail;
