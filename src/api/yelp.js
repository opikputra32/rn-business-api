import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer A1395kMHDuFdgH8nHVYovp7uEB0D3QgNyaxE_IwlluUIH5QEpvhEaTYDGeP_9Hp_xgDYj2s6BRXvAndN8XVAZFlqaxDcIFYn4Lu-eQIvEaUJmYjTqC_X9d9Xs3rlYXYx',
  },
});
