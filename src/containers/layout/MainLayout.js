import React, { Suspense, lazy } from "react";
import { Layout } from "antd";
import MainContent from "./MainContent";

const LazyHeader = lazy(() =>
  import("../../components/comon/headers/MainHeader")
);
const LazyFooter = lazy(() =>
  import("../../components/comon/footer/MainFooter")
);

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
