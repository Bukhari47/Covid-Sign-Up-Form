import React, { Suspense, lazy } from "react";
import { Layout } from "antd";
import MainContent from "./MainContent.jsx";

const LazyHeader = lazy(() => import("../comon/headers/MainHeader.jsx"));
const LazyFooter = lazy(() => import("../comon/footer/MainFooter.jsx"));

const { Header, Footer } = Layout;
function MainLayout() {
  return (
    <Layout>
      <Header className="Header-style">
        <Suspense fallback="Loading...">
          <LazyHeader />
        </Suspense>
      </Header>

      <MainContent />

      <Footer>
        <Suspense fallback="Loading...">
          <LazyFooter />
        </Suspense>
      </Footer>
    </Layout>
  );
}

export default MainLayout;
