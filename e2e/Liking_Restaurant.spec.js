const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
    I.seeElement('#allrestaurants');
    I.see('No Restaurants', '.no-favorite-item');
});

Scenario('liking one restaurant', async ({ I }) => {
    I.see('No Restaurants', '.no-favorite-item');
  
    I.amOnPage('/');
    
    I.seeElement('.menu-detail a');
    
    const firstRestaurant = locate('.menu-title').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    
    I.click(locate('.menu-detail a').first());
  
    I.seeElement('[aria-label="like this restaurant"]');
    I.click('[aria-label="like this restaurant"]');
  
    I.amOnPage('/#/favorite');
    I.seeElement('.card');
    const likedRestaurantTitle  = await I.grabTextFrom('.menu-title');
  
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle );
});

Scenario('unlike one restaurant', async ({ I }) => {
    I.see('No Restaurants', '.no-favorite-item');
  
    I.amOnPage('/');
    
    I.seeElement('.menu-detail a');
    
    const firstRestaurant = locate('.menu-title').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    
    I.click(locate('.menu-detail a').first());
  
    I.seeElement('[aria-label="like this restaurant"]');
    I.click('[aria-label="like this restaurant"]');
  
    I.amOnPage('/#/favorite');
    I.seeElement('.card');
    const likedRestaurantTitle  = await I.grabTextFrom('.menu-title');
  
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle );

    I.seeElement('.menu-detail a');
    I.click(locate('.menu-detail a').first());

    I.seeElement('[aria-label="unlike this restaurant"]');
    I.click('[aria-label="unlike this restaurant"]');

    I.amOnPage('/#/favorite');
    I.seeElement('#allrestaurants');
    I.see('No Restaurants', '.no-favorite-item');
});
