import React from "react";
import {
  Form,
  Input,
  DatePicker,
  Button,
  Col,
  Row,
  Select,
  InputNumber,
  Upload,
} from "antd";
import PageTitle from "../comon/PageTitle";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const PersonalInfo = ({
  personalDetails,
  snapshotUpload,
  validateMessages,
}) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const prefixSelector = (
    <Form.Item name={["Personal Info", "countryCode"]} noStyle>
      <Select style={{ width: 70 }}>
        <Option value="92">+92</Option>
      </Select>
    </Form.Item>
  );
  return (
    <Row>
      <Col span={4}></Col>
      <Col span={16}>
        <PageTitle title={"Personal Information"} />
        <Form
          name="nest-messages"
          onFinish={personalDetails}
          validateMessages={validateMessages}
        >
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item
                name={["Personal Info", "firstName"]}
                label="First Name"
                rules={[
                  { required: true },
                  {
                    pattern: /^[a-zA-Z ]+$/,
                    message:
                      "Name does not contain Number or Speacial Character",
                  },
                ]}
              >
                <Input placeholder={"John Doe"} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={["Personal Info", "lastName"]}
                label="Last Name"
                rules={[
                  { required: true },
                  {
                    pattern: /^[a-zA-Z ]+$/,
                    message:
                      "Name does not contain Number or Speacial Character",
                  },
                ]}
              >
                <Input placeholder={"John Doe"} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item
                name={["Personal Info", "email"]}
                label="Email"
                rules={[
                  { type: "email", required: true },
                  {
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Pattern should be in user@example.com",
                  },
                ]}
              >
                <Input placeholder={"jhondoe@example.com"} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={["Personal Info", "phone"]}
                label="Phone Number"
                rules={[
                  {
                    required: true,
                  },
                  {
                    pattern: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
                    message:
                      "Phone Number should be in pattern +(123)-456-78-90",
                  },
                ]}
              >
                <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item
                label="DOB"
                rules={[{ required: true }]}
                name={["Personal Info", "DOB"]}
              >
                <DatePicker />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={["Personal Info", "gender"]}
                label="Gender"
                rules={[{ required: true }]}
              >
                <Select placeholder="Gender" allowClear>
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item
                name={["Personal Info", "address"]}
                label="Address"
                rules={[
                  {
                    required: true,
                  },
                  {
                    pattern: /^[a-zA-Z0-9\s,'-]*$/,
                    message: "Address does not conttain Special Charaters",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={["Personal Info", "city"]}
                label="City"
                rules={[
                  {
                    required: true,
                  },
                  {
                    pattern: /^[a-zA-Z0-9\s,'-]*$/,
                    message: "City does not conttain Special Charaters",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item
                name={["Personal Info", "State"]}
                label="State"
                rules={[
                  {
                    required: true,
                  },
                  {
                    pattern: /^[a-zA-Z0-9\s,'-]*$/,
                    message: "State does not conttain Special Charaters",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={["Personal Info", "zipcode"]}
                label="Zip Code"
                rules={[
                  {
                    type: "number",
                    required: true,
                  },
                  {
                    pattern: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
                    message: "Please specify a valid US zip code.",
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name={["Personal Info", "snapshot"]}
            label="Snapshot"
            rules={[
              {
                required: true,
              },
            ]}
            valuePropName="Snapshot List"
            getValueFromEvent={snapshotUpload}
          >
            <Upload
              name="snapshot"
              listType="picture"
              maxCount={2}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              accept=".png,.jpg,.jpeg"
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col span={4}></Col>
    </Row>
  );
};

export default PersonalInfo;
