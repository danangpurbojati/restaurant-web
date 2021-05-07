import urlParser from '../routes/url-parser';
import RestaurantDbSource from '../data/restaurantdb-source';

const formReview = (id) => {
  const formContainer = document.getElementById('form-review');
  const nameInput = document.getElementById('name-form');
  const commentInput = document.getElementById('comment-form');

  formContainer.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = {
      id,
      name: nameInput.value,
      review: commentInput.value,
    };

    const result = await RestaurantDbSource.ReviewRestorant(data);
    if (!result.error) {
      window.location.reload();
    }
  });
};

export default formReview;
