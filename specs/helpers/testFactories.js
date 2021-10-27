import FavoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonPresenter.init({
    favoriteButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant };
