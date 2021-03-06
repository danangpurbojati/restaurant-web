import CONFIG from './config';

const API_ENDPOINT = {
  ALL_RESTAURANTS: `${CONFIG.BASE_URL}list`,
  DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
