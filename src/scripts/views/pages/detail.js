import RestaurantDbSource from '../../data/restaurantdb-source';
import CONFIG from '../../globals/config';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="detail-page" class="detail-page">
          
      </div>

      <div>
          <div class="container">
              <h3>Add Review</h3>
              <form id="form-review">
                  <div class="input-wrapper">
                      <label class="label" for="name">Name:</label>
                      <input type="text" id="name" placeholder="your name ..">
                  </div>
                  <div class="input-wrapper">
                      <label class="label" for="comment">Comment:</label>
                      <textarea name="comment" id="comment"></textarea>
                  </div>
                  <button class="submit" type="submit">Submit</button>
              </form>
          </div>
          <div class="container">
              <h3 class="review-header">All Reviews</h3>
              <div class="review-wrapper">
                  <h3 class="reviewer">Joni Iskandar</h3>
                  <p class="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vero beatae corporis provident tempore atque eveniet incidunt quae enim porro quos, ad, itaque dignissimos harum maiores consequatur impedit blanditiis repudiandae.</p>
              </div>
              <div class="review-wrapper">
                  <h3 class="reviewer">Joni Iskandar</h3>
                  <p class="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vero beatae corporis provident tempore atque eveniet incidunt quae enim porro quos, ad, itaque dignissimos harum maiores consequatur impedit blanditiis repudiandae.</p>
              </div>
          </div>
      </div>

      <div id="likeButtonContainer">
      
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    console.log(restaurant);
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

    const formReview = document.getElementById('form-review');
    const nameInput = document.getElementById('name');
    const commentInput = document.getElementById('comment');

    formReview.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = {
        id: restaurant.restaurant.id,
        name: nameInput.value,
        review: commentInput.value,
      };

      fetch('https://restaurant-api.dicoding.dev/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': '12345',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log('Success:', result);
          // window.location.reload();
        })
        .catch((error) => {
          alert(error);
        });
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        description: restaurant.restaurant.description,
        image_url: CONFIG.BASE_IMAGE_URL + restaurant.restaurant.pictureId,
        rating: restaurant.restaurant.rating,
        address: restaurant.restaurant.address,
        city: restaurant.restaurant.city,
      },
    });
  },
};

export default Detail;
