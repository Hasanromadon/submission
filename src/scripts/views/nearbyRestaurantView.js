import View from './view';
import { restaurantCard } from '../components/componentView';

class NearbyView extends View {
constructor(){
  super();
  this.parentElement = document.querySelector('.section__around__wrapper');
  
}

renderCard () {
  const { data } = this;
  return data
    .map((restaurant) => restaurantCard(restaurant))
    .join(' ');
}

generateMarkUp() {
  return `<div class="div">
           <h3 tabindex="0">Diminati Sekitar</h3>
            <p class="section__sub-title">Restourant yang mungkin kamu akan sukai ada disini</p>
         </div> ${this.renderCard()}`;
}
}

export default new NearbyView();
