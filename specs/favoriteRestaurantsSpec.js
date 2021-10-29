import favoriteRestaurantIdb from '../src/scripts/data/restaurant-local-source';
import * as TestFactories from './helpers/testFactories';

describe('Favoriting A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the Favorit-kan button when the restaurants has not been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('.btn-favorite').innerText === 'Favoritkan')
      .toBeTruthy();
  });

  it('should not show the Favorit button when the restaurants has not been pressed Favoritkan button before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('.btn-favorite').innerText === 'Favorit')
      .toBeFalsy();
  });

  it('should be able to favorite the restaurant', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await favoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });
    await favoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
    await favoriteRestaurantIdb.putRestaurants({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

    favoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
  favoriteRestaurantIdb.deleteRestaurant(1);
});
