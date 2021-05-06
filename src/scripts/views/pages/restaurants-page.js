import RestaurantDbSource from '../../data/restaurantdb-source';
import CONFIG from '../../globals/config';

const RestaurantsPage = {
  async render() {
    return `
        <main>
            <div class="container">
                <h2 class="secondary-main-title">our restaurants</h2>
                <h1 class="main-title">choose & come in</h1>

                <div id="allrestaurants" class="menu-content">
                    
                </div>
            </div>
        </main>  
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.allRestaurants();
    const restaurantContainer = document.getElementById('allrestaurants');
    let restaurantElement = '';
    restaurants.forEach((restaurant) => {
      restaurantElement += `
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
    });

    restaurantContainer.innerHTML = restaurantElement;
  },
};

export default RestaurantsPage;
