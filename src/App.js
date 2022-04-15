import React from 'react';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';

import LoginView from './views/login-view';
import HomeView from './views/home-view';
import NewsView from './views/news-view';
import AppBar from './components/app-bar';

import PrivateRoute from './components/private-route';
import PublicRoute from './components/public-route';
import { authOperations, authSelectors } from './redux/auth';

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <AppBar />
          <Switch>
            <Suspense fallback={<p>Загружаем...</p>}>
              <PublicRoute exact path="/" redirectTo="/news" restricted>
                <LoginView />
              </PublicRoute>
              <PrivateRoute exact path="/home" redirectTo="/">
                <HomeView />
              </PrivateRoute>
              <PrivateRoute path="/news" redirectTo="/">
                <NewsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </>
  );
}

export default App;
