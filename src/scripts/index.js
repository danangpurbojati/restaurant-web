import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import restaurants from '../DATA.json';
import App from './views/app';

window.addEventListener('DOMContentLoaded', () => {
    const menuContent = document.getElementById('menu-content');

    const app = new App({
        button: document.getElementById('hamburger'),
        drawer: document.getElementById('drawer'),
        content: document.getElementById('content-wrapper'),
    });

    let restaurantElement = "";
    restaurants.restaurants.forEach( restaurant => {
        restaurantElement += `
            <div class="card">
                <img class="menu-image" src="${restaurant.pictureId}" alt="${restaurant.name}">
                <div class="menu-city">
                    <p>${restaurant.city}</p>
                </div>
                <div class="menu-text">
                    <p class="menu-rating"><strong>Rating: </strong> ${restaurant.rating}</p>
                    <h1 class="menu-title">${restaurant.name}</h1>
                    <p class="menu-description">${restaurant.description.substring(0, 100)}. . .</p>
                </div>
                <div class="menu-detail">
                    <a aria-label="more detail ${restaurant.name}" class="btn" href="#">More Detail</a>
                </div>
            </div>
        `;
    });

    menuContent.innerHTML = restaurantElement;
    
});
