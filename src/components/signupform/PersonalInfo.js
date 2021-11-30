import React, { useState } from "react";
import {
  Col,
  Row,
  Form,
  Input,
  Select,
  Upload,
  Card,
  DatePicker,
  Divider,
  Button,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const PersonalInfo = ({ fieldCol, form }) => {
  const gender = ["Male", "Female", "Other"];

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  return (
    <Card title="Personal Info">
      <Col {...fieldCol}>
        <Form.Item
          name={["Personal", "UUID"]}
          label="ID"
          initialValue={form.getFieldValue("uuid")}
        >
          <Input disabled />
        </Form.Item>
      </Col>
      <Row>
        <Col {...fieldCol}>
          <Form.Item
            name={["Personal", "firstName"]}
            label="First Name"
            rules={[
              { required: true },
              {
                pattern: /^[a-zA-Z ]+$/,
                message: "Name does not contain Number or Speacial Character",
              },
            ]}
          >
            <Input placeholder="Jhon" />
          </Form.Item>
        </Col>
        <Col {...fieldCol}>
          <Form.Item
            name={["Personal", "lastName"]}
            label="Last Name"
            rules={[
              { required: true },
              {
                pattern: /^[a-zA-Z ]+$/,
                message: "Name does not contain Number or Speacial Character",
              },
            ]}
          >
            <Input placeholder="Doe" />
          </Form.Item>
        </Col>

        <Col {...fieldCol}>
          <Form.Item
            name={["Personal", "email"]}
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
            <Input placeholder="Jhondoe@example.com" type="email" />
          </Form.Item>
        </Col>
        <Col {...fieldCol}>
          {" "}
          <Form.Item
            name={["Personal", "phone"]}
            label="Phone Number"
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
          >
            <Input placeholder="923066524101" />
          </Form.Item>
        </Col>
        <Col {...fieldCol}>
          <Form.Item
            name={["Personal", "DOB"]}
            label="Date Of Birth"
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>
        </Col>
        <Col {...fieldCol}>
          <Form.Item
            name={["Personal", "gender"]}
            label="Gender"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select gender" allowClear>
              {gender.map((gender) => (
                <Option value={gender}>{gender}</Option>
              ))}
            </Select>
          </Form.Item>
        </Col>

        <Col {...fieldCol}>
          <Form.Item
            name={["Personal", "address"]}
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
            <Input placeholder="Street no 1 house no 2" />
          </Form.Item>
        </Col>
        <Col {...fieldCol}>
          <Form.Item
            name={["Personal", "city"]}
            label="City"
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
            <Input placeholder="Sargodha" />
          </Form.Item>
        </Col>
        <Col {...fieldCol}>
          <Form.Item
            name={["Personal", "zipcode"]}
            label="Zip Code"
            rules={[
              {
                required: true,
              },
              {
                pattern: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
                message: "Please specify a valid US zip code.",
              },
            ]}
          >
            <Input type="number" placeholder="Street no 1 house no 2" />
          </Form.Item>
        </Col>
        <Col {...fieldCol}>
          <Form.Item
            name={["Personal", "State"]}
            label="State"
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
            <Input placeholder="State/Province" />
          </Form.Item>
        </Col>
        <Col {...fieldCol}>
          <Form.Item
            name={["Personal", "Snapshot"]}
            label="Snapshot"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Upload maxCount={2} customRequest={dummyRequest}>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
};

export default PersonalInfo;
