import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={null}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={null}>
            <Login />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
