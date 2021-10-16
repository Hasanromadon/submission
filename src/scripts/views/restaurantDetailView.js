import View from './view';
import { detailRestaurant } from '../components/componentView';

class RestaurantDetailView extends View {
    parentElement = document.querySelector('.main-detail')

    renderAllRestaurant = () => {
      const { data } = this;
      const markup = detailRestaurant(data);
      return `
            ${markup}`;
    }

    generateMarkUp() {
      return this.renderAllRestaurant();
    }
}

export default new RestaurantDetailView();
