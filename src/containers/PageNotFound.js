import React from "react";
import { Typography, Row, Col } from "antd";

const { Text } = Typography;
function PageNotFound() {
  return (
    <Row>
      <Text strong>Opps...!!! Page not found...!!!</Text>
    </Row>
  );
}

export default PageNotFound;
