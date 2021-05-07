const reviewItem = (review) => `
  <div class="review-wrapper">
    <h3 class="reviewer">${review.name}</h3>
    <p class="review-text">${review.review}</p>
  </div>
`;

const categoryItem = (category) => `
    <span class="category">${category.name}</span>
`;

const foodItem = (menu) => `
    <p class="food-item">${menu.name}</p>
`;

export { reviewItem, categoryItem, foodItem };
