import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async allRestaurants() {
    const response = await fetch(API_ENDPOINT.ALL_RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    return response.json();
  }
}

export default RestaurantDbSource;
