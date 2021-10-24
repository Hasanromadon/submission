import RestaurantSource from '../data/restaurant-source';
import { reviewCard } from '../views/templates/template-creator';
import { dangerToast, successToast } from './toast';

const submitReview = (id) => {
  const parentForm = document.getElementById('comment-form');
  const reviewContainer = document.querySelector('.review-card-group');
  let newReview;
  parentForm.addEventListener('submit', function sumbit(e) {
    e.preventDefault();
    const arrData = [...new FormData(this)]; //
    newReview = Object.fromEntries(arrData);
    newReview.id = id;
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date().toLocaleDateString('id-ID', options);
    newReview.date = date;
    RestaurantSource.submitReview(newReview).then((data) => {
      reviewContainer.innerHTML += reviewCard(newReview);
      document.querySelector('.review').innerHTML = `${data.length} Ulasan`;
      parentForm.reset();
      successToast('Review Berhasil ditambahkan');
    }).catch(() => {
      dangerToast('Gagal Ditambahkan');
    });
  });
};

export default submitReview;
