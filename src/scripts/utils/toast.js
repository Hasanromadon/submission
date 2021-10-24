import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export const successToast = (text) => {
  Toastify({
    text,
    duration: 10000,
    close: true,
    gravity: 'top',
    position: 'right',
    stopOnFocus: false,
    style: {
      background: 'linear-gradient(to right, #fdc830, #f37335)',
      fontSize: '16px',
    },
  }).showToast();
};

export const dangerToast = (text) => {
  Toastify({
    text,
    duration: 2000,
    close: true,
    gravity: 'top',
    position: 'right',
    stopOnFocus: false,
    style: {
      background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
      fontSize: '16px',
    },
  }).showToast();
};
