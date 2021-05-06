import HomePage from '../views/pages/home-page';
import Detail from '../views/pages/detail';
import RestaurantsPage from '../views/pages/restaurants-page';

const routes = {
  '/': HomePage,
  '/restaurants': RestaurantsPage,
  '/detail/:id': Detail,
};

export default routes;
