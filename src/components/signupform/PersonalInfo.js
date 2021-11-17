import React from "react";
import { Form, Col, Row, Select } from "antd";
import ProForm, {
  StepsForm,
  ProFormText,
  ProFormDatePicker,
  ProFormSelect,
  ProFormDigit,
  ProFormRadio,
  ProFormUploadButton,
} from "@ant-design/pro-form";

import ProCard from "@ant-design/pro-card";
const { Option } = Select;

const PersonalInfo = () => {
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
    <>
      <ProCard
        title={["Personal Info"]}
        bordered
        headerBordered
        collapsible
        style={{
          marginBottom: 16,
          minWidth: 800,
          maxWidth: "100%",
        }}
      >
        <Row>
          <Col span={12}>
            <ProFormText
              name={["Personal Info", "firstName"]}
              width="md"
              label="First Name"
              tooltip="Enter your first name"
              placeholder="John"
              rules={[
                { required: true },
                {
                  pattern: /^[a-zA-Z ]+$/,
                  message: "Name does not contain Number or Speacial Character",
                },
              ]}
            />
          </Col>
          <Col span={12}>
            <ProFormText
              name={["Personal Info", "lastName"]}
              width="md"
              label="Last Name"
              tooltip="Enter your first name"
              placeholder="Doe"
              rules={[
                { required: true },
                {
                  pattern: /^[a-zA-Z ]+$/,
                  message: "Name does not contain Number or Speacial Character",
                },
              ]}
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <ProFormText
              name={["Personal Info", "email"]}
              width="md"
              label="Email"
              tooltip="Enter your Email"
              placeholder="John"
              rules={[
                { type: "email", required: true },
                {
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Pattern should be in user@example.com",
                },
              ]}
            />
          </Col>
          <Col span={12}>
            <ProFormText
              name={["Personal Info", "phone"]}
              label="Phone Number"
              width="md"
              placeholder={"Mobile phone number"}
              rules={[
                {
                  required: true,
                  message: "Please enter your phone number! ",
                },
                {
                  pattern: /^\(?(\d{4})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
                  message: "Mobile phone number format is wrong! ",
                },
              ]}
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <ProFormDatePicker
              name={["Personal Info", "DOB"]}
              label="Date Of Birth"
              width="md"
              placeholder=""
              rules={[{ required: true }]}
            />
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
        <Row>
          <Col span={12}>
            <ProFormText
              name={["Personal Info", "address"]}
              label="Address"
              width="md"
              tooltip="Enter your Address"
              placeholder="Street no 11B House no 123A "
              rules={[
                {
                  required: true,
                },
                {
                  pattern: /^[a-zA-Z0-9\s,'-]*$/,
                  message: "Address does not conttain Special Charaters",
                },
              ]}
            />
          </Col>
          <Col span={12}>
            <ProFormText
              name={["Personal Info", "city"]}
              label="City"
              placeholder="Sargodha"
              width="md"
              tooltip="Enter your City"
              rules={[
                {
                  required: true,
                },
                {
                  pattern: /^[a-zA-Z0-9\s,'-]*$/,
                  message: "Address does not conttain Special Charaters",
                },
              ]}
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <ProFormText
              name={["Personal Info", "State"]}
              label="State"
              placeholder="Punjab"
              width="md"
              tooltip="Enter your State"
              rules={[
                {
                  required: true,
                },
                {
                  pattern: /^[a-zA-Z0-9\s,'-]*$/,
                  message: "Address does not conttain Special Charaters",
                },
              ]}
            />
          </Col>
          <Col span={12}>
            <ProFormDigit
              name={["Personal Info", "zipcode"]}
              label="Zip Code"
              width="md"
              placeholder="12345"
              rules={[
                {
                  required: true,
                },
                {
                  pattern: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
                  message: "Please specify a valid US zip code.",
                },
              ]}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProFormUploadButton
              name={["Personal Info", "snapshot"]}
              label="Snapshot"
              placeholder="upload snapshot"
              rules={[{ required: true }]}
              max={1}
              fieldProps={{
                name: "snapshot",
                listType: "picture-card",
              }}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              accept=".png,.jpg,.jpeg"
            />
          </Col>
        </Row>
      </ProCard>

      <ProCard
        title="Insurance"
        bordered
        headerBordered
        collapsible
        style={{
          minWidth: 800,
          marginBottom: 16,
        }}
      >
        <ProFormRadio.Group
          name={["Insurance Details", "HaveInsurance"]}
          label="Do you have Insurance?"
          radioType="button"
          rules={[{ required: true }]}
          options={[
            {
              label: "Yes",
              value: true,
            },
            {
              label: "No",
              value: false,
            },
          ]}
        />
      </ProCard>
    </>
  );
};

export default PersonalInfo;
