import {
 getAllRestaurant
} from './models/model';
import nearbyRestaurant from './views/nearbyRestaurantView';
import popularRestaurant from './views/popularRestaurantView';
import categoryView from './views/categoryView';
const ctrlLoadAllRestaurant = async () => {
  
  const restaurantData = getAllRestaurant();
  categoryView.render();
  popularRestaurant.render(restaurantData.slice(0, 4));
  nearbyRestaurant.render(restaurantData.slice(4));
};



const init = () => {
    ctrlLoadAllRestaurant();
};

init();
