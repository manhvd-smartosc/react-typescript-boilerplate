import routes from '@src/constants/route';
import Home from '@src/pages/Home';
import Login from '@src/pages/Login';

export default [
  {
    path: routes.LOGIN,
    component: Login,
    exact: true,
    restricted: true,
    isPrivate: false,
  },
  {
    path: routes.HOME,
    component: Home,
    exact: true,
    restricted: false,
    isPrivate: false,
  },
];
