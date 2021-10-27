import axios from '../globals/config-axios';
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async allRestaurants() {
    try {
      const { data: { restaurants } } = await axios(API_ENDPOINT.LIST);
      return restaurants;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async recommendedRestaurants(id) {
    try {
      const restaurants = await this.allRestaurants();
      let city = restaurants.find((res) => res.id === id);
      city = city.city;
      const restaurantsByCity = restaurants.filter((res) => res.city === city);
      return restaurantsByCity;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async detailRestaurant(id) {
    try {
      const { data: { restaurant } } = await axios(API_ENDPOINT.DETAIL(id));
      return restaurant;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async searchRestaurantByCategory(category) {
    try {
      const { data: { restaurants } } = await axios(API_ENDPOINT.SEARCH(category));
      return restaurants;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async submitReview(payload) {
    try {
      const { data: { customerReviews } } = await axios.post(API_ENDPOINT.REVIEW, payload);
      return customerReviews;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default RestaurantSource;
