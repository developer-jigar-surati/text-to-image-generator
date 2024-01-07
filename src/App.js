import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { ROOT, NOT_FOUND } from './global/routes';

const TextToImageGenerator = lazy(() => import('./pages/TextToImageGenerator'));
const NotFound = lazy(() => import('./pages/notFound'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={ROOT}
          element={<TextToImageGenerator />}
        />
        <Route
          path={NOT_FOUND}
          element={<NotFound />}
        />
        <Route
          path="*"
          element={<Navigate to={NOT_FOUND} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
