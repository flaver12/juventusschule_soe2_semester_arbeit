/* @refresh reload */
import { render } from 'solid-js/web';
import './App.scss';

import { Route, Router, Routes } from "@solidjs/router";
import { lazy } from 'solid-js';

const HomePage = lazy(() => import('./page/HomePage'));

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={HomePage} />
      </Routes>
    </Router>
  ),
  root!
);
