import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';

const Main = () => {
  const [favoritesList, setfavoritesList] = useState([]);

  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home
              {...props}
              favoritesList={favoritesList}
              setfavoritesList={setfavoritesList}
            />
          )}
        />
        <Route
          exact
          path="/favorites"
          render={(props) => (
            <Favorites
              {...props}
              favoritesList={favoritesList}
              setfavoritesList={setfavoritesList}
            />
          )}
        />
      </Switch>
    </main>
  );
};

export default Main;
