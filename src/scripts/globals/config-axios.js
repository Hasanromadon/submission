import axios from 'axios';
import CONFIG from './config';

axios.create({
  headers: {
    'X-Auth-Token': CONFIG.KEY,
    'content-type': 'application/json',
  },
});

export default axios;
