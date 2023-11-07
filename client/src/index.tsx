/* @refresh reload */
import { render } from 'solid-js/web';
import './App.scss';

import { Route, Router, Routes } from "@solidjs/router";
import { lazy } from 'solid-js';
import { CarService } from './service/CarService';
import { carData } from './data/carData';

const HomePage = lazy(() => import('./page/HomePage'));
const BasePage = lazy(() => import('./page/BasePage'));

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

const carService = new CarService();

render(
  () => (
    <Router>
      <Routes>
          <Route path="/" component={BasePage}>
            <Route path="/" component={HomePage} data={carData} />
          </Route>
      </Routes>
    </Router>
  ),
  root!
);
