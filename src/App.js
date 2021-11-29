import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";

const LazyHeader = lazy(() => import("./components/comon/headers/MyHeader"));
const LazyHomePage = lazy(() => import("./containers/Homepage"));
const LazySignUpForm = lazy(() => import("./containers/SignUpForm"));
const LazyPageNotFound = lazy(() => import("./containers/PageNotFound"));
const LazyBlogs = lazy(() => import("./containers/Blogs"));

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <Suspense fallback="Loading...">
            <LazyHeader />
          </Suspense>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
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
        <Footer style={{ textAlign: "center" }}>
          Developed in React by using Ant Design and Less
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
