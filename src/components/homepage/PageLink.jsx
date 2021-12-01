import { Button, Card, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function PageLink() {
  return (
    <Card>
      <Row>
        <Col span={20}>Lets register your self and your family on form</Col>
        <Col span={4}>
          <Link to="/Signup">
            <Button>Register Now</Button>
          </Link>
        </Col>
      </Row>
    </Card>
  );
}

export default PageLink;
