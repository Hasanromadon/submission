import FavoriteRestaurantSource from '../data/local-source';
import { dangerToast, successToast } from './toast';

const ctrlFavorite = async (restaurant, id) => {
  const btnFavorite = document.getElementById('btn-favorite');
  const isFavorited = await FavoriteRestaurantSource.getFavoriteRestaurant(id);
  if (isFavorited) {
    btnFavorite.classList.add('favorited');
    btnFavorite.innerText = 'Favorit';
  }
  btnFavorite.addEventListener('click', async () => {
    const singleData = await FavoriteRestaurantSource.getFavoriteRestaurant(id);
    if (!singleData) {
      await FavoriteRestaurantSource.addFavoriteRestaurant(restaurant).then(
        successToast('🧡 Berhasil ditambahkan ke favorit '),
      );
      btnFavorite.classList.add('favorited');
      btnFavorite.innerText = 'Favorit';
    } else {
      FavoriteRestaurantSource.deleteFavoriteRestaurant(id).then(dangerToast('💔 terhapus dari favorit..'));
      btnFavorite.innerText = 'Favoritkan';
      btnFavorite.classList.remove('favorited');
    }
  });
};

export default ctrlFavorite;
