import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { restorantItem, emptyFavorite } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <main>
            <div class="container">
                <h2 class="secondary-main-title">your favorite restaurants</h2>
                <h1 class="main-title">choose & come in</h1>

                <div id="allrestaurants" class="menu-content">
                    
                </div>
            </div>
        </main>  
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    console.log(restaurants.length);
    const restaurantContainer = document.getElementById('allrestaurants');
    let restaurantElement = '';

    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        restaurantElement += restorantItem(restaurant);
      });
    } else {
      restaurantElement = emptyFavorite();
    }

    restaurantContainer.innerHTML = restaurantElement;
  },
};

export default Favorite;
