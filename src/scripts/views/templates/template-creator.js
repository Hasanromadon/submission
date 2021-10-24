import API_ENDPOINT from '../../globals/api-endpoint';
import { ratingSay, ratingStars } from '../../utils/rating';

const restaurantCard = ({
  id, name, description, pictureId, city, rating,
}) => {
  const startIcon = ratingStars(rating);
  return (
    `<div class="card">
        <div class="card__img__wrapper">
            <img class="card__img" loading=lazy src="${API_ENDPOINT.IMAGE('small')}/${pictureId}" alt="">
        </div>
        <a href="${`/#/detail/${id}`}" class="card__link card__link--block">
            <span class="card__link__title">${name}</span>
        </a>
        <div class="card__description__group">
          <p class="visually-hidden">lokasi di</p>
         <span class="card__description"><img class="icon__star" src="images/icons/icon-pin.svg" alt="">${city}</span>
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

const detailRestaurant = ({
  id, name, description, city, address, pictureId, categories, menus, rating, customerReviews,
}) => {
  const category = categories.map((cat) => (
    `<li class="card__tag">${cat.name}</li>`
  )).join(' ');
  const menuFood = menus.foods.map((food) => (
    `<li><span class="menu__list__checkmark">✔</span> ${food.name}</li>`
  )).join(' ');
  const menuDrink = menus.drinks.map((food) => (
    `<li><span class="menu__list__checkmark">✔</span> ${food.name}</li>`
  )).join(' ');

  const reviews = customerReviews.map((review) => (
    ` <div class="review-card">
          <p class="review-name">${review.name}</p>
          <p class="review-text">“${review.review}”<span class="review-date"> -<em>Diulas
                  pada ${review.date}</em> </p>
      </div>`
  )).join(' ');
  return (
    `<div class="detail__card">
      <div class="detail__hero">
          <img class="detail__hero__image" src="${API_ENDPOINT.IMAGE('medium')}/${pictureId}" alt="">
      </div>
      <div class="detail__card__header">
          <div class="detail__card__header__top">

              <h3 class="detail__card__header__title">${name}</h3>
              <div class="detail__card__header__rating"> <img src="images/icons/icon-star.svg" alt=""><span> ${rating} (${ratingSay(rating)})</span></div>
          </div>
      
          <div class="card__description__group ">
              <p class="visually-hidden">lokasi di</p>
            <span class="card__description detail__location "> <img class="icon__star"
            src="images/icons/icon-pin.svg" alt="">${address}, ${city}</span>
          </div>
          <ul class="card__tags">
              ${category}
          </ul>
          
      </div>
    </div>
    <section class="detail__section">
      <nav class="detail__nav">
          <ul class="nav-list">
              <li class="nav-list__item">
                  <a data-link="about" class="detail__nav__link hidden-mobile">About</a>
              </li>
              <li class="nav-list__item">
                  <a data-link="menu" class="detail__nav__link hidden-mobile">Menu</a>
              </li>
              <li class="nav-list__item">
                  <a data-link="review" class="detail__nav__link">Review</a>
              </li>
              <li class="nav-list__item">
                  <button id="btn-favorite" data-id="${id}" class="btn btn-favorite btn__primary--outlined">Favoritkan</button>
              </li>
          </ul>
      </nav>
      <div class="detail__content">
          <div id="about" class="detail__content__about">
              <p class="detail__content__title">TENTANG</p>
              <p>${description}</p>
          </div>
          <div id="menu" class="detail__content__menu">
              <p class="detail__content__title">MENU</p>
              <div class="detail__content__menu__wrapper">
                  <div class="detail__content__menu__food">
                      <p>Makanan:</p>
                      <ul class="menu__list">
                      ${menuFood}
                      </ul>
                  </div>
                  <div class="detail__content__menu__drink">
                      <p>Minuman:</p>
                      <ul class="menu__list">
                      ${menuDrink}
                      </ul>
                  </div>
              </div>
          </div>
          <div id="review" class="detail__content__rating-review">
              <p class="detail__content__title">REVIEW</p>
              <div class="rating-review-group">
                  <p class="rating">Rating ${rating}</p>
                  <p class="review">${customerReviews.length} Ulasan </p>
              </div>
              <div class="review-card-group">
                ${reviews}
              </div>
          </div>
          <section class="comment__section">
          <p class="comment__section__title">Tulis Reviewmu!</p>
            <form class="comment__form" id="comment-form" >
              <label class="visually-hidden" for="name">Nama</label>
              <input id="name" class="comment__input" name="name" type="text" placeholder="Namamu">
              <label class="visually-hidden" for="reviewText" >Review</label>
              <textarea id="reviewText" class="comment__input" name="review" id="" rows="10" cols="100" placeholder="Reviewmu, cth : Restoran Mantap sekali"></textarea>
              <button type=submit" class="btn btn__primary btn--right">Kirim Review</button>
            </form>
       
          </section>
    </div>
    <div>
    
    </div>
  </section>`
  );
};

const sidebarRestaurantCard = ({
  id, name, description, pictureId, city, rating,
}) => (
  ` <div class="card card--sidebar">
    <div class="card__img__wrapper">
        <img class="card__img" loading=lazy src="${API_ENDPOINT.IMAGE('small')}/${pictureId}"alt="">
    </div>
    <div>
        <a href="${`/#/detail/${id}`}" class="card__link card__link--block">
            <span class="card__link__title">${name}</span>
        </a>
        <div class="card__description__group card__description__group--sidebar">
            <p class="visually-hidden">lokasi di</p>
           <span class="card__description"> <img class="icon__star"
           src="images/icons/icon-pin.svg" alt="">${city}</span>
            <span class="card__description card__description__rating">
                 <span class="icon__star">
                    <img src="images/icons/icon-star.svg" alt="">
                 </span>
                ${rating}</span>
        </div>
        <p class="card__description">${description.substring(0, 50)}</p>
          </div>
      </div>`
);

const reviewCard = (newReview) => (
  ` <div class="review-card">
      <p class="review-name">${newReview.name}</p>
      <p class="review-text">“${newReview.review}”<span class="review-date"> -<em>Diulas
      pada ${newReview.date}</em> </p>
   </div>`
);

const errorPage = (errorText) => (
  ` <div class="error">
      <p><span class="error__icon">&#9888;</span> ${errorText}</p>
  </div>`
);

export {
  restaurantCard, detailRestaurant, sidebarRestaurantCard, reviewCard, errorPage,
};
