import React, { useState } from "react";
import { Col, Row, Form, Input, Select, Upload, Card } from "antd";

import { v4 as uuidv4 } from "uuid";
import ProCard from "@ant-design/pro-card";

const { Option } = Select;

const PersonalInfo = () => {
  const gender = ["Male", "Female", "Other"];
  console.log("UUID", uuidv4());
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  return (
    <Row>
      <Card title="Personal Info" bordered={false}>
        <Form.Item name={["Personal Info", "Personal UUID"]} label="ID">
          <Input disabled defaultValue={uuidv4()} />
        </Form.Item>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              name={["Personal Info", "firstName"]}
              label="First Name"
              tooltip="Enter your first name"
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
          <Col span={12}>
            <Form.Item
              name={["Personal Info", "lastName"]}
              label="Last Name"
              tooltip="Enter your first name"
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
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              name={["Personal Info", "email"]}
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
            >
              <Input placeholder="Jhondoe@example.com" type="email" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={["Personal Info", "phone"]}
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
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              name={["Personal Info", "DOB"]}
              label="Date Of Birth"
              rules={[{ required: true }]}
            >
              <Input placeholder="Jhondoe@example.com" type="date" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={["Personal Info", "gender"]}
              label="Gender"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select a option and change input text above"
                allowClear
              >
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
              name={["Personal Info", "address"]}
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
            >
              <Input placeholder="Street no 1 house no 2" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={["Personal Info", "city"]}
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
              name={["Personal Info", "zipcode"]}
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
          <Col span={12}>
            <Form.Item
              name={["Personal Info", "State"]}
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
            >
              <Input placeholder="State/Province" />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Item
              name={["Personal Info", "Snapshot"]}
              label="Snapshot"
              tooltip="Upload your Snapshot"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
              >
                {fileList.length < 1 && "+ Upload"}
              </Upload>
            </Form.Item>
          </Col>
        </Row>
      </Card>
    </Row>
  );
};

export default PersonalInfo;
