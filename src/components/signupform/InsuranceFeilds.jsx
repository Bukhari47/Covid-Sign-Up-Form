import React, { useState } from "react";
import { Form, Row, Col, Input, Select, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

function InsuranceFeilds({ formName, form, field, fieldCol }) {
  const name = field !== undefined ? field.name : formName;

  const dummyRequest = ({ file, onSuccess }) => {
    form.getFieldsValue();
    // form.setFieldsValue({ Family: [] });
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
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
      <Col {...fieldCol}>
        <Form.Item
          name={[name, "insuranceCardNumber"]}
          label="Insurance Card Number"
          fieldKey={[field?.key, "insuranceCardNumber"]}
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
          <Input placeholder="AB123456C" />
        </Form.Item>
      </Col>
      <Col {...fieldCol}>
        <Form.Item
          name={[name, "insuranceCompany"]}
          label="Select your insurance company"
          fieldKey={[field?.key, "insuranceCompany"]}
          rules={[{ required: true }]}
        >
          <Select placeholder="Select your insurance company" allowClear>
            {insuranceCompanies.map((companies) => (
              <Option value={companies}>{companies}</Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
      <Col {...fieldCol}>
        <Form.Item
          name={[name, "insuranceCard"]}
          label="Front and Back side image of Insurance Card"
          rules={[{ required: true }]}
          fieldKey={[field?.key, "insuranceCard"]}
        >
          <Upload maxCount={2} customRequest={dummyRequest}>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
      </Col>
    </Row>
  );
}

export default InsuranceFeilds;
