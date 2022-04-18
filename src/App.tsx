import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const MainPage = lazy(() => import("./pages/MainPage"));
const TvPage = lazy(() => import("./pages/TvPage"));
const MovieDetail = lazy(() => import("./pages/MovieDetail"));
const TvDetail = lazy(() => import("./pages/TvDetail"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/tv" element={<TvPage />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/tv/:id" element={<TvDetail />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
