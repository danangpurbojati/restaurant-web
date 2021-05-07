import RestaurantDbSource from '../../data/restaurantdb-source';
import { restorantItem } from '../templates/template-creator';

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
      restaurantElement += restorantItem(restaurant);
    });

    restaurantContainer.innerHTML = restaurantElement;
  },
};

export default RestaurantsPage;
