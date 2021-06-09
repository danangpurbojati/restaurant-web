import RestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { detailRestaurant, pageNotFound } from '../templates/template-creator';
import formReview from '../../utils/form-review';

const Detail = {
  async render() {
    return `
      <div id="detail-page" class="detail-page">
      </div>

      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const detailPageContainer = document.getElementById('detail-page');

    if (restaurant.error) {
      detailPageContainer.innerHTML = pageNotFound();
    } else {
      detailPageContainer.innerHTML = detailRestaurant(restaurant.restaurant);
    }

    formReview(url.id);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        description: restaurant.restaurant.description,
        pictureId: restaurant.restaurant.pictureId,
        rating: restaurant.restaurant.rating,
        address: restaurant.restaurant.address,
        city: restaurant.restaurant.city,
      },
    });
  },
};

export default Detail;
