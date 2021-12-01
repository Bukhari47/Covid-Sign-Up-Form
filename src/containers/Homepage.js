import { Col, Row } from "antd";
import React from "react";
import PageTitle from "../components/comon/headers/PageTitle.jsx";
import PageLink from "../components/homepage/PageLink.jsx";
function Homepage() {
  return (
    <>
      <Row>
        <Col span={24}>
          <PageTitle title={"Homepage"} subtitle={"Welcome to our website"} />
        </Col>
      </Row>
      <Col span={24}>
        <PageLink />
      </Col>
    </>
  );
}

export default Homepage;
