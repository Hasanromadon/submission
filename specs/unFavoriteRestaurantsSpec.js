import FavoriteButtonInitiator from '../src/scripts/utils/favorite-button-initiator';
import favoriteRestaurantIdb from '../src/scripts/data/restaurant-local-source';

const addfavoriteButtonContainer = () => {
  document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
};

describe('UnFavoriting A Restaurant', () => {
  beforeEach(async () => {
    addfavoriteButtonContainer();
    await favoriteRestaurantIdb.putRestaurants({ id: 1 });
  });

  afterEach(async () => {
    await favoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display favorite button when the restaurant has been favorited', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('.btn-favorite').innerText === 'Favorit')
      .toBeTruthy();
  });

  it('should not display favoritkan button when the restaurant has been favorited', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('.btn-favorite').innerText === 'Favoritkan')
      .toBeFalsy();
  });

  it('should be able to remove favorite restaurant from the list', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the favorite restaurant is not in the list', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    await favoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
