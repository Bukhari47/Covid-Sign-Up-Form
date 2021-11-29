import React, { useState } from "react";
import { Col, Row, Form, Input, Select, Upload, Card } from "antd";

const { Option } = Select;

const PersonalInfo = ({ form }) => {
  const gender = ["Male", "Female", "Other"];
  const [fileList, setFileList] = useState([]);
  const handleImageUpload = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  return (
    <Card title="Personal Info">
      <Form.Item
        name={["Personal", "UUID"]}
        label="ID"
        initialValue={form.getFieldValue("uuid")}
        tooltip="Your Registeration ID"
      >
        <Input disabled />
      </Form.Item>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name={["Personal", "firstName"]}
            label="First Name"
            tooltip="Enter your first name"
            rules={[
              { required: true },
              {
                pattern: /^[a-zA-Z ]+$/,
                message: "Name does not contain Number or Speacial Character",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Jhon" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={["Personal", "lastName"]}
            label="Last Name"
            tooltip="Enter your first name"
            rules={[
              { required: true },
              {
                pattern: /^[a-zA-Z ]+$/,
                message: "Name does not contain Number or Speacial Character",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Doe" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name={["Personal", "email"]}
            label="Email"
            tooltip="Enter your Email"
            rules={[
              { type: "email", required: true },
              {
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Pattern should be in user@example.com",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Jhondoe@example.com" type="email" />
          </Form.Item>
        </Col>
        <Col span={12}>
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
            hasFeedback
          >
            <Input placeholder="923066524101" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name={["Personal", "DOB"]}
            label="Date Of Birth"
            rules={[{ required: true }]}
            hasFeedback
          >
            <Input placeholder="Jhondoe@example.com" type="date" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={["Personal", "gender"]}
            label="Gender"
            rules={[{ required: true }]}
            hasFeedback
          >
            <Select placeholder="Select gender" allowClear>
              {gender.map((gender) => (
                <Option value={gender}>{gender}</Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name={["Personal", "address"]}
            label="Address"
            tooltip="Enter your Address"
            rules={[
              {
                required: true,
              },
              {
                pattern: /^[a-zA-Z0-9\s,'-]*$/,
                message: "Address does not conttain Special Charaters",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Street no 1 house no 2" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={["Personal", "city"]}
            label="City"
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
          >
            <Input placeholder="Sargodha" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
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
            hasFeedback
          >
            <Input type="number" placeholder="Street no 1 house no 2" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={["Personal", "State"]}
            label="State"
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
            hasFeedback
          >
            <Input placeholder="State/Province" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Item
            name={["Personal", "Snapshot"]}
            label="Snapshot"
            tooltip="Upload your Snapshot"
            rules={[
              {
                required: true,
              },
            ]}
            hasFeedback
          >
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onChange={handleImageUpload}
            >
              {fileList.length < 1 && "+ Upload"}
            </Upload>
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
};

export default PersonalInfo;
