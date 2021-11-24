import React, { useState } from "react";
import { Col, Row, Form, Input, Select, Upload, Card } from "antd";
import { v4 as uuidv4 } from "uuid";
const { Option } = Select;

const PersonalInfo = () => {
  const gender = ["Male", "Female", "Other"];
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    DOB: "",
    Gender: "",
    Address: "",
    City: "",
    Zipcode: "",
    State: "",
    Snapshot: "",
  });
  const [fileList, setFileList] = useState([]);
  const handleImageUpload = ({ fileList: newFileList }) => {
    setPersonalInfo({ ...personalInfo, Snapshot: newFileList });
    setFileList(newFileList);
  };

  return (
    <Card title="Personal Info">
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
          >
            <Input
              placeholder="Jhon"
              value={personalInfo.firstName}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, firstName: e.target.value })
              }
            />
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
          >
            <Input
              placeholder="Doe"
              value={personalInfo.lastName}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, lastName: e.target.value })
              }
            />
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
          >
            <Input
              placeholder="Jhondoe@example.com"
              type="email"
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, email: e.target.value })
              }
            />
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
          >
            <Input
              placeholder="923066524101"
              value={personalInfo.phoneNumber}
              onChange={(e) =>
                setPersonalInfo({
                  ...personalInfo,
                  phoneNumber: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name={["Personal", "DOB"]}
            label="Date Of Birth"
            rules={[{ required: true }]}
          >
            <Input
              placeholder="Jhondoe@example.com"
              type="date"
              value={personalInfo.DOB}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, DOB: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={["Personal", "gender"]}
            label="Gender"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select a option and change input text above"
              value={personalInfo.Gender}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, Gender: e.value })
              }
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
            <Input
              placeholder="Sargodha"
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, Address: e.target.value })
              }
            />
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
          >
            <Input
              type="number"
              placeholder="Street no 1 house no 2"
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, Zipcode: e.target.value })
              }
            />
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
          >
            <Input
              placeholder="State/Province"
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, State: e.target.value })
              }
            />
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
