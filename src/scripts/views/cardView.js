import View from './view';
import { restaurantCard } from '../components/componentView';

class PlayersView extends View {
    parentElement = document.querySelector('.players_sections')

    renderCardView = () => {
      const data = this.data.data.slice(1, 5);
      return data.map((restaurant) => restaurantCard(restaurant)).join('');
    }

    generateMarkUp() {
      return `<div class="container">
                <div class="player_container">
                    ${this.renderCardView()}
                </div>
            </div>`;
    }
}

export default new PlayersView();
