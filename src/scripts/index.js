import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import restaurants from '../DATA.json';

window.addEventListener('DOMContentLoaded', () => {
    const drawer = document.getElementById('drawer');
    const hamburger = document.getElementById('hamburger');
    const body = document.querySelector('body');
    const menuContent = document.getElementById('menu-content');

    hamburger.addEventListener('click', (event) => {  
        drawer.classList.toggle("nav-open");
        body.classList.toggle("body-open");
        event.stopPropagation();
    });

    body.addEventListener('click', () => {
        drawer.classList.remove('nav-open');
        body.classList.remove('body-open');
        event.stopPropagation();
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
