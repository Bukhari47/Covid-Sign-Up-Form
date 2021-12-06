import React from "react";
import { Layout } from "antd";
import AppHeader from "../headers/MainHeader.jsx";
import AppFooter from "../footer/MainFooter.jsx";
const { Header, Content, Footer } = Layout;
function MainLayout({ children }) {
  return (
    <Layout>
      <Header>
        <AppHeader />
      </Header>
      <Content>{children}</Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default MainLayout;
