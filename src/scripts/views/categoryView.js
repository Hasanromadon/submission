import View from './view';
import { categoryCard } from '../components/componentView';
import baliImg from '../../public/images/category/cat_bali.png';
import italiaImg from '../../public/images/category/cat_italia.png';
import jawaImg from '../../public/images/category/cat_jawa.png';
import modernImg from '../../public/images/category/cat_modern.png';
import soupImg from '../../public/images/category/cat_soup.png';


class CategoryView extends View {
constructor(){
  super();
  this.parentElement = document.querySelector('.category-wrapper');
  
}

generateMarkUp() {
  return(
      categoryCard(baliImg, 'Bali', 'first')+
      categoryCard(italiaImg, 'Italia', '')+
      categoryCard(jawaImg, 'Jawa', '')+
      categoryCard(soupImg, 'Soup', '')+
      categoryCard(modernImg, 'Modern', '')
      );
}
}

export default new CategoryView();
