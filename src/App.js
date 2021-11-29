import React from "react";
import MyHeader from "./components/comon/headers/MyHeader";
import { Layout } from "antd";
import Homepage from "./containers/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from "./containers/Blogs";
import SignUpForm from "./containers/SignUpForm";
import PageNotFound from "./containers/PageNotFound";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <MyHeader />
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/Signup" element={<SignUpForm />} />
            <Route path="*" element={<PageNotFound />} />
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
