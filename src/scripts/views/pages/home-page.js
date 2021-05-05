import restaurants from '../../../DATA.json';

const HomePage = {
    async render(){
        return `
            <section class="hero">
                <img src="./images/heros/hero-image_2.jpg" alt="hero-background">
                <div class="hero-content">
                    <h2 class="hero-sub-title">it's a good time for the great taste of burgers</h2>
                    <h1 class="hero-title">burger week</h1>
                    <div class="hero-link-wrapper">
                        <a class="btn btn-outline" href="#">Our Menu</a>
                        <a class="btn btn-full" href="#">Order</a>
                    </div>
                </div>
            </section>

            <main id="maincontent">
                <div class="container">
                    <h2 class="secondary-main-title">our restaurants</h2>
                    <h1 class="main-title">choose & come in</h1>

                    <div id="menu-content" class="menu-content">
                        
                    </div>
                </div>
            </main>
        `
    },

    async afterRender(){
        const menuContent = document.getElementById('menu-content');
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
    }
}

export default HomePage;