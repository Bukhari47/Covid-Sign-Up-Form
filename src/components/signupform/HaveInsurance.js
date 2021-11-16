import React, { useState } from "react";
import { Form, Col, Row, Radio, Upload, Input, Button, Select } from "antd";
import PageTitle from "../comon/PageTitle";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const InsuranceInfo = ({
  insuranceDetails,
  validateMessages,
  uploadCardImage,
}) => {
  const [insurance, setInsurance] = useState();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const insuranceCompanies = [
    "Adamjee Insurance Company Ltd",
    "Asia Insurance Co Ltd",
    "Atlas Insurance Ltd",
    "Chubb Insurance Pakistan Ltd",
    "CICL",
    "East West Insurance Company Ltd",
    "EFU Genera",
    "Habib Insurance Company Ltd",
    "IGI",
    "Jubilee General Insurance Co. Ltd",
    "PICIC (Pakistan Industrial Credit Investment Corporation)",
    "Premier Insurance Limited",
  ];
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
              {" "}
              <Form.Item
                name={["Insurance Details", "insuranceCardNumber"]}
                label="Insurance Card Number"
                rules={[
                  {
                    required: true,
                  },
                  {
                    pattern: /^\s*[a-zA-Z]{2}(?:\s*\d\s*){6}[a-zA-Z]?\s*$/,
                    message:
                      "Insurance card pattern didn't match pattern should be `ZK 123456 A`",
                  },
                ]}
              >
                <Input style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                name={["Insurance Details", "insuranceCompany"]}
                label="Select your insurance company"
                rules={[{ required: true }]}
              >
                <Select
                  style={{ width: "100%" }}
                  defaultValue="Select"
                  allowClear
                >
                  {insuranceCompanies.map((company) => (
                    <Option value={company}>{company}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                name={["Insurance Details", "Card Front"]}
                label="Front image of your insurance card"
                rules={[
                  {
                    required: true,
                  },
                ]}
                valuePropName="Insurance Card Image"
                getValueFromEvent={uploadCardImage}
              >
                <Upload
                  name={["Insurance Details", "Card Front"]}
                  listType="picture"
                  maxCount={1}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  accept=".png,.jpg,.jpeg,svg"
                >
                  <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name={["Insurance Details", "Card Back"]}
                label="Back image of your insurance card"
                rules={[
                  {
                    required: true,
                  },
                ]}
                valuePropName="Insurance Card Image"
                getValueFromEvent={uploadCardImage}
              >
                <Upload
                  name={["Insurance Details", "Card Back"]}
                  listType="picture"
                  maxCount={1}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  accept=".png,.jpg,.jpeg,svg"
                >
                  <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Next
                </Button>
              </Form.Item>
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
