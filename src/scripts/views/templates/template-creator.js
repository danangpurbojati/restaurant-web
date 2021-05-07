import CONFIG from '../../globals/config';
import { reviewItem, categoryItem, foodItem } from './detail-templates';

const restorantItem = (restaurant) => `
  <div class="card">
    <img class="menu-image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
    <div class="menu-city">
        <p>${restaurant.city}</p>
    </div>
    <div class="menu-text">
        <p class="menu-rating">
            <strong>Rating: </strong> 
            ${restaurant.rating}
        </p>
        <h1 class="menu-title">${restaurant.name}</h1>
        <p class="menu-description">${restaurant.description.substring(0, 100)}. . .</p>
    </div>
    <div class="menu-detail">
        <a aria-label="more detail ${restaurant.name}" class="btn" href="/#/detail/${restaurant.id}">More Detail</a>
    </div>
  </div>
`;

const detailRestaurant = (restaurant) => `
  <div class="container">
    <div class="detail-image-wrapper">
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
    </div>
    <h1 class="detail-page-title">${restaurant.name}</h1>
    <div class="detail-rating-wrapper">
        <div class="rating-wrapper">
            <h3>Rating: </h3>
            <p>${restaurant.rating}</p>
        </div>
    </div>
    <div class="detail-city-wrapper">
        <h3>Categories:</h3>
        ${restaurant.categories.map((category) => categoryItem(category)).join('')}
    </div>
    <div class="detail-city-wrapper">
        <h3>City:</h3>
        <p>${restaurant.city}</p>
    </div>
    <div class="detail-city-wrapper">
        <h3>Address:</h3>
        <p>${restaurant.address}</p>
    </div>
    <div class="detail-city-wrapper">
        <h3>Foods:</h3>
        ${restaurant.menus.foods.map((menu) => foodItem(menu))}
    </div>
    <div class="detail-city-wrapper">
        <h3>Drinks:</h3>
        <p>${restaurant.menus.drinks.map((menu) => foodItem(menu))}</p>
    </div>
    <div class="detail-description-wrapper">
        <h3>Description:</h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  <div class="container">
    <h3>Add Review</h3>
    <form id="form-review">
        <div class="input-wrapper">
            <label class="label" for="name">Name:</label>
            <input type="text" id="name-form" placeholder="your name ..">
        </div>
        <div class="input-wrapper">
            <label class="label" for="comment">Comment:</label>
            <textarea name="comment" id="comment-form"></textarea>
        </div>
        <button class="submit" type="submit">Submit</button>
    </form>
  </div>
  <div class="container">
    <h3 class="review-header">All Reviews</h3>
    ${restaurant.customerReviews.map((review) => reviewItem(review)).join('')}
  </div>
`;

const pageNotFound = () => `
  <div class="container">
    <h1>Page Not Found</h1>
  </div
`;

const emptyFavorite = () => `
  <div class="container">
    <p>No Restaurants</p>
  </div
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  restorantItem,
  detailRestaurant,
  pageNotFound,
  emptyFavorite,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
