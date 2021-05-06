import RestaurantDbSource from '../../data/restaurantdb-source';
import CONFIG from '../../globals/config';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
      <div id="detail-page" class="detail-page">
          
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const detailPageContainer = document.getElementById('detail-page');
    const detailRestaurant = `
      <div class="container">
          <div class="detail-image-wrapper">
              <img src="${CONFIG.BASE_IMAGE_URL + restaurant.restaurant.pictureId}" alt="${restaurant.restaurant.name}">
          </div>
          <h1 class="detail-page-title">${restaurant.restaurant.name}</h1>
          <div class="detail-rating-wrapper">
              <div class="rating-wrapper">
                  <h3>Rating: </h3>
                  <p>${restaurant.restaurant.rating}</p>
              </div>
              <div class="like-wrapper">
                  <h3>like</h3>
              </div>
          </div>
          <div class="detail-city-wrapper">
              <h3>City:</h3>
              <p>${restaurant.restaurant.city}</p>
          </div>
          <div class="detail-city-wrapper">
              <h3>Address:</h3>
              <p>${restaurant.restaurant.address}</p>
          </div>
          <div class="detail-description-wrapper">
              <h3>Description:</h3>
              <p>${restaurant.restaurant.description}</p>
          </div>
      </div>
    `;
    detailPageContainer.innerHTML = detailRestaurant;
  },
};

export default Detail;
