import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const LazyHomePage = lazy(() => import("./containers/Homepage"));
const LazySignUpForm = lazy(() => import("./containers/SignUpForm"));
const LazyPageNotFound = lazy(() => import("./containers/PageNotFound"));
const LazyBlogs = lazy(() => import("./containers/Blogs"));
import MainLayout from "./components/comon/layout/MainLayout.jsx";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback="Loading...">
                <LazyHomePage />
              </Suspense>
            }
          />
          <Route
            path="/Blogs"
            element={
              <Suspense fallback="Loading...">
                <LazyBlogs />
              </Suspense>
            }
          />
          <Route
            path="/Signup"
            element={
              <Suspense fallback="Loading...">
                <LazySignUpForm />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback="Loading...">
                <LazyPageNotFound />
              </Suspense>
            }
          />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
