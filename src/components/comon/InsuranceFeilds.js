import React, { useState } from "react";
import { Form, Row, Col, Input, Select, Upload } from "antd";

const { Option } = Select;

function InsuranceFeilds({ formName }) {
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
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
    <>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name={["Personal Info", "firstName"]}
            label="First Name"
            tooltip="Enter your first name"
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
            <Input placeholder="Jhon" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={[formName, "insuranceCompany"]}
            label="Select your insurance company"
            placeholder="Select your insurance company"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              {insuranceCompanies.map((companies) => (
                <Option value={companies}>{companies}</Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <Form.Item
            name={[formName, "Front"]}
            label="Front and Back side image of Insurance Card"
            rules={[{ required: true }]}
            tooltip="Upload your Front Side"
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
        <Col span={12}>
          <Form.Item
            name={[formName, "Front"]}
            label="Front and Back side image of Insurance Card"
            rules={[{ required: true }]}
            tooltip="Upload your Front Side"
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
    </>
  );
}

export default InsuranceFeilds;
