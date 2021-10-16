import star from '../../public/images/icons/icon-star.svg';
import starHalf from '../../public/images/icons/icon-star-half.svg';
import starEmpty from '../../public/images/icons/icon-star-empty.svg';
import iconPin from '../../public/images/icons/icon-pin.svg';

export const categoryCard = (img,title, first)=> (
    `<div class="category__option category__option${first === 'first' ?'--first' : '' }">
    <img class="category__option__img" src="${img}" alt="">
    <a class="category__option__link" href="#">
        <span class="visually-hidden">kategori</span>
        <span class="category__option__text">${title}</span>
    </a>
  </div>`
)

export const restaurantCard = ({
  id, name, description, pictureId, city, rating,
}) => {
  let startIcon;
  if (rating > 4.5) {
    startIcon = `<img src="${star}" alt="">
                <img src="${star}" alt="">
                <img src="${star}" alt="">
                <img src="${star}" alt="">
                <img src="${star}" alt="">
                `;
  } else if (rating === 4.5) {
    startIcon = `<img src="${star}" alt="">
                <img src="${star}" alt="">
                <img src="${star}" alt="">
                <img src="${star}" alt="">
                <img src="${starHalf}" alt="">`;
  } else if (rating >= 4) {
    startIcon = `<img src="${star}" alt="">
                <img src="${star}" alt="">
                <img src="${star}" alt="">
                <img src="${star}" alt="">
                <img src="${starEmpty}" alt="">`;
  } else if (rating >= 3.5) {
    startIcon = `<img src="${star}" alt="">
                <img src="${star}" alt="">
                <img src="${star}" alt="">
                <img src="${starHalf}" alt="">
                <img src="${starEmpty}" alt="">`;
  } else if (rating >= 3) {
    startIcon = `<img src="${star}" alt="">
                <img src="${star}" alt="">
                <img src="${star}" alt="">
                <img src="${starEmpty}" alt="">
                <img src="${starEmpty}" alt="">`;
  } else if (rating >= 2.5) {
    startIcon = `<img src="${star}" alt="">
                <img src="${star}" alt="">
                <img src="${starHalf}" alt="">
                <img src="${starEmpty}" alt="">
                <img src="${starEmpty}" alt="">`;
  } else if (rating >= 2) {
    startIcon = `<img src="${star}" alt="">
                <img src="${star}" alt="">
                <img src="${starEmpty}" alt="">
                <img src="${starEmpty}" alt="">
                <img src="${starEmpty}" alt="">`;
  } else if (rating >= 1.5) {
    startIcon = `<img src="${star}" alt="">
                <img src="${starHalf}" alt="">
                <img src="${starEmpty}" alt="">
                <img src="${starEmpty}" alt="">
                <img src="${starEmpty}" alt="">`;
  } else if (rating >= 1) {
    startIcon = `<img src="${star}" alt="">
                <img src="${starEmpty}" alt="">
                <img src="${starEmpty}" alt="">
                <img src="${starEmpty}" alt="">
                <img src="${starEmpty}" alt="">`;
  } else {
    startIcon = '';
  }
  return (
    `<div tabindex="0" class="card">
        <div class="card__img__wrapper">
            <img class="card__img" loading=lazy src="${pictureId}" alt="">
        </div>
        <a href="detail.html?id=${id}" class="card__link card__link--block">
            <span class="card__link__title">${name}</span>
        </a>
        <div class="card__description__group">
          <p class="visually-hidden">lokasi di</p>
         <span class="card__description"><img class="icon__star" src="${iconPin}" alt="">${city}</span>
         <span class="card__description card__description__rating ">
              <span class="icon__star">
                  ${startIcon}
              </span>
              <p class="visually-hidden">rating</p>
              ${rating > 0 ? rating : 'Belum diulas'}
          </span>
        </div>
        <p class="card__description">${description.substring(0, 100)}</p>
    </div>`
  );
};