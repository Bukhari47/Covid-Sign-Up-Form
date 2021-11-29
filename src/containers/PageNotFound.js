import React from "react";
import { Typography, Row, Col } from "antd";

const { Text } = Typography;
function PageNotFound() {
  return (
    <Row>
      <Col>
        <Text strong>Opps...!!! Page not found...!!!</Text>
      </Col>
    </Row>
  );
}

export default PageNotFound;
