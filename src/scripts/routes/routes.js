import HomePage from '../views/pages/home-page';
import Detail from '../views/pages/detail';
import RestaurantsPage from '../views/pages/restaurants-page';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': HomePage,
  '/restaurants': RestaurantsPage,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
