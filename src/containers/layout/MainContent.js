import { Layout } from "antd";
import React, { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";
const LazyHomePage = lazy(() => import("../Homepage"));
const LazySignUpForm = lazy(() => import("../SignUpForm"));
const LazyPageNotFound = lazy(() => import("../PageNotFound"));
const LazyBlogs = lazy(() => import("../Blogs"));

const { Content } = Layout;
function MainContent() {
  return (
    <Content>
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
    </Content>
  );
}

export default MainContent;
