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

const PersonalInfo = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const { Option } = Select;
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const prefixSelector = (
    <Form.Item name={["user", "countryCode"]} noStyle>
      <Select style={{ width: 70 }}>
        <Option value="92">+92</Option>
      </Select>
    </Form.Item>
  );
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const PersonalDetails = (values) => {
    console.log(values);
  };
  return (
    <Row>
      <Col span={4}></Col>
      <Col span={16}>
        <PageTitle title={"Personal Information"} />
        <Form
          name="nest-messages"
          onFinish={PersonalDetails}
          validateMessages={validateMessages}
        >
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item
                name={["user", "firstName"]}
                label="First Name"
                rules={[{ required: true }]}
              >
                <Input placeholder={"John Doe"} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={["user", "lastName"]}
                label="Last Name"
                rules={[{ required: true }]}
              >
                <Input placeholder={"John Doe"} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[{ type: "email" }]}
              >
                <Input placeholder={"jhondoe@example.com"} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={["user", "phone"]}
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item label="DOB" name={["user", "DOB"]}>
                <DatePicker />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={["user", "gender"]}
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
                name={["user", "address"]}
                label="Address"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={["user", "city"]}
                label="City"
                rules={[
                  {
                    required: true,
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
                name={["user", "State"]}
                label="State"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={["user", "zipcode"]}
                label="Zip Code"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name={["user", "snapshot"]}
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col span={4}></Col>
    </Row>
  );
};

export default PersonalInfo;
