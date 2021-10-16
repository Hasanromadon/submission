import View from './view';
import { sidebarRestaurantCard } from '../components/componentView';

class SidebarView extends View {
    parentElement = document.querySelector('.sidebar__wrapper');

    renderAllRestaurant ()  {
      const { data } = this;
      const markup = data.map((resto) => sidebarRestaurantCard(resto)).join(' ');
      return `
            ${markup}`;
    }

    generateMarkUp() {
      return this.renderAllRestaurant();
    }
}

export default new SidebarView();
