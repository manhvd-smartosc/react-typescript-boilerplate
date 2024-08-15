import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import appRoutes from './appRoutes';

const AppRouter = () => {
  if (!nprogress.isStarted()) nprogress.start();

  useEffect(() => {
    nprogress.done();
  });

  return (
    <BrowserRouter>
      <Switch>
        {appRoutes.map((route) => (
          <Route
            exact
            path={route.path}
            component={route.component}
            key={route.path}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
