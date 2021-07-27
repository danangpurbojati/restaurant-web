import RestaurantDbSource from '../../data/restaurantdb-source';
import { restorantItem } from '../templates/template-creator';


const HomePage = {
  async render() {
    return `
        <section class="hero">
            <picture>
            <source media="(max-width: 600px)" srcset="./images/heros/hero-small.jpg">
            <img 
                src='./images/heros/hero-large.jpg' 
                alt="hero-backgroundr"></img>
            </picture>
            <div class="hero-content">
                <h2 class="hero-sub-title">it's a good time for the great taste of burgers</h2>
                <h1 class="hero-title">burger week</h1>
                <div class="hero-link-wrapper">
                    <a class="btn btn-outline" href="/#/restaurants">Our Restaurants</a>
                    <a class="btn btn-full" href="#">Order</a>
                </div>
            </div>
        </section>

        <main>
            <div class="container">
                <h2 class="secondary-main-title">our restaurants</h2>
                <h1 class="main-title">choose & come in</h1>

                <div id="menu-content" class="menu-content">
                    
                </div>

                <a href="/#/restaurants" class="btn more-restaurant-btn">More restaurants</a>
            </div>
        </main>  
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.allRestaurants();
    const menuContent = document.getElementById('menu-content');
    let restaurantElement = '';
    restaurants.forEach((restaurant, index) => {
      if (index < 6) {
        restaurantElement += restorantItem(restaurant);
      }
    });

    menuContent.innerHTML = restaurantElement;
  },
};

export default HomePage;
