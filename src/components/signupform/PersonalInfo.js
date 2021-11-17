import React from "react";
import { Col, Row } from "antd";
import ProForm, {
  StepsForm,
  ProFormText,
  ProFormDatePicker,
  ProFormSelect,
  ProFormDigit,
  ProFormRadio,
  ProFormUploadButton,
} from "@ant-design/pro-form";

import { v4 as uuidv4 } from "uuid";
import ProCard from "@ant-design/pro-card";

const PersonalInfo = () => {
  const gender = ["Male", "Female", "Other"];
  console.log("UUID", uuidv4());
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
        <ProFormText
          name={["Personal Info", "Personal UUID"]}
          width="lg"
          label="ID"
          value={uuidv4()}
          disabled
        />
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
                  pattern: /^\(?(\d{3})\)?[- ]?(\d{4})[- ]?(\d{5})$/,

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
            <ProFormSelect
              name={["Personal Info", "gender"]}
              label="Gender"
              width="md"
              valueEnum={gender}
              rules={[{ required: true }]}
            />
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
    </>
  );
};

export default PersonalInfo;
