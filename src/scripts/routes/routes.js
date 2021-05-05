import HomePage from '../views/pages/home-page';
import Detail from '../views/pages/detail';

const routes = {
  '/': HomePage,
  '/detail/:id': Detail,
};

export default routes;
