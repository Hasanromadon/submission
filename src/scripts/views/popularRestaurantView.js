import View from './view';
import { restaurantCard } from '../components/componentView';

class PopularView extends View {
  constructor() {
    super();
    this.parentElement = document.querySelector('.section__popular__wrapper');
  }

  renderCard() {
    const { data } = this;
    return data
      .map((restaurant) => restaurantCard(restaurant))
      .join(' ');
  }

  generateMarkUp() {
    return this.renderCard();
  }
}

export default new PopularView();
