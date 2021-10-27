export const ratingSay = (rating) => {
  let ratingName;
  if (rating > 4.5) {
    ratingName = 'Sangat Memuaskan';
  } else if (rating > 4) {
    ratingName = 'Memuaskan';
  } else if (rating > 3.5) {
    ratingName = 'Cukup Memuaskan';
  } else if (ratingSay > 2.5) {
    ratingName = 'Kurang Memuaskan';
  } else {
    ratingName = 'Tidak Memuaskan';
  }
  return ratingName;
};

export const ratingStars = (rating) => {
  let startIcon;
  if (rating > 4.5) {
    startIcon = `<img src="images/icons/icon-star.svg" alt="">
                <img src="images/icons/icon-star.svg" alt="">
                <img src="images/icons/icon-star.svg" alt="">
                <img src="images/icons/icon-star.svg" alt="">
                <img src="images/icons/icon-star.svg" alt="">
                `;
  } else if (rating === 4.5) {
    startIcon = `<img src="images/icons/icon-star.svg" alt="">
                <img src="images/icons/icon-star.svg" alt="">
                <img src="images/icons/icon-star.svg" alt="">
                <img src="images/icons/icon-star.svg" alt="">
                <img src="images/icons/icon-star-half.svg" alt="">`;
  } else if (rating >= 4) {
    startIcon = `<img src="images/icons/icon-star.svg" alt="">
                <img src="images/icons/icon-star.svg" alt="">
                <img src="images/icons/icon-star.svg" alt="">
                <img src="images/icons/icon-star.svg" alt="">
                <img src="images/icons/icon-star-empty.svg" alt="">`;
  } else if (rating >= 3.5) {
    startIcon = `<img src="images/icons/icon-star.svg" alt="">
                <img src="images/icons/icon-star.svg" alt="">
                <img src="images/icons/icon-star.svg" alt="">
                <img src="images/icons/icon-star-half.svg" alt="">
                <img src="images/icons/icon-star-empty.svg" alt="">`;
  } else if (rating >= 3) {
    startIcon = `<img src="images/icons/icon-star.svg" alt="">
                <img src="images/icons/icon-star.svg" alt="">
                <img src="images/icons/icon-star.svg" alt="">
                <img src="images/icons/icon-star-empty.svg" alt="">
                <img src="images/icons/icon-star-empty.svg" alt="">`;
  } else if (rating >= 2.5) {
    startIcon = `<img src="images/icons/icon-star.svg" alt="">
                <img src="images/icons/icon-star.svg" alt="">
                <img src="images/icons/icon-star-half.svg" alt="">
                <img src="images/icons/icon-star-empty.svg" alt="">
                <img src="images/icons/icon-star-empty.svg" alt="">`;
  } else if (rating >= 2) {
    startIcon = `<img src="images/icons/icon-star.svg" alt="">
                <img src="images/icons/icon-star.svg" alt="">
                <img src="images/icons/icon-star-empty.svg" alt="">
                <img src="images/icons/icon-star-empty.svg" alt="">
                <img src="images/icons/icon-star-empty.svg" alt="">`;
  } else if (rating >= 1.5) {
    startIcon = `<img src="images/icons/icon-star.svg" alt="">
                <img src="images/icons/icon-star-half.svg" alt="">
                <img src="images/icons/icon-star-empty.svg" alt="">
                <img src="images/icons/icon-star-empty.svg" alt="">
                <img src="images/icons/icon-star-empty.svg" alt="">`;
  } else if (rating >= 1) {
    startIcon = `<img src="images/icons/icon-star.svg" alt="">
                <img src="images/icons/icon-star-empty.svg" alt="">
                <img src="images/icons/icon-star-empty.svg" alt="">
                <img src="images/icons/icon-star-empty.svg" alt="">
                <img src="images/icons/icon-star-empty.svg" alt="">`;
  } else {
    startIcon = '';
  }
  return startIcon;
};
