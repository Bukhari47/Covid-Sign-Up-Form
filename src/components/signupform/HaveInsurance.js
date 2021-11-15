import React, { useState } from "react";
import { Form, Col, Row, Radio, Upload, Input, Button, Select } from "antd";
import PageTitle from "../comon/PageTitle";
import { UploadOutlined } from "@ant-design/icons";
import InsuranceForm from "./InsuranceForm";

const { Option } = Select;

const InsuranceInfo = ({ insuranceDetails, validateMessages }) => {
  const [insurance, setInsurance] = useState();

  return (
    <Row>
      <Col span={4}></Col>
      <Col span={16}>
        <PageTitle title={"Insurance Information"} />
        <Form
          name="nest-messages"
          onFinish={insuranceDetails}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["Insurance Details", "HaveInsurance"]}
            label="Do you have Insurance?"
          >
            <Radio.Group
              onChange={(e) => {
                console.log(e.target.value);
                setInsurance(e.target.value);
              }}
              value={insurance}
            >
              <Radio.Button value={true}>Yes</Radio.Button>
              <Radio.Button value={false}>No</Radio.Button>
            </Radio.Group>
          </Form.Item>
          {insurance ? (
            <>
              <InsuranceForm
                insuranceDetails={insuranceDetails}
                validateMessages={validateMessages}
              />
              {/* <Form.Item
                name={["Insurance Details", "Insurance Card"]}
                label="Upload front and back images of your insurance card"
              >
                <Upload>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Form.Item> */}
            </>
          ) : (
            <></>
          )}
        </Form>
      </Col>
      <Col span={4}></Col>
    </Row>
  );
};

export default InsuranceInfo;
