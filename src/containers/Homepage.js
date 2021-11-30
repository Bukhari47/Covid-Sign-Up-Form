import { Col, Row } from "antd";
import React from "react";
import PageTitle from "../components/comon/headers/PageTitle";
import PageLink from "../components/homepage/PageLink";
function Homepage() {
  return (
    <Row gutter={12}>
      <Col span={24}>
        <PageTitle title={"Homepage"} subtitle={"Welcome to our website"} />
      </Col>
      <Col span={24}>
        <PageLink />
      </Col>
    </Row>
  );
}

export default Homepage;
