import Localbase from 'localbase';

const db = new Localbase('db');

class FavoriteRestaurantSource {
  static async getAllFavoritesRestaurant() {
    const restaurant = await db.collection('favoritesRestaurant').get();
    return restaurant;
  }

  static async getFavoriteRestaurant(id) {
    let restaurant;
    if (id) {
      restaurant = db.collection('favoritesRestaurant').doc({ id }).get();
    }
    return restaurant;
  }

  static async addFavoriteRestaurant(detailRestaurantData) {
    try {
      const {
        id, name, rating, description, city, pictureId,
      } = detailRestaurantData;
      db.collection('favoritesRestaurant').add(
        {
          id, name, rating, description, city, pictureId,
        }, id,
      );
    } catch (err) {
      throw new Error(err);
    }
  }

  static async deleteFavoriteRestaurant(id) {
    try {
      db.collection('favoritesRestaurant').doc({ id }).delete();
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default FavoriteRestaurantSource;
