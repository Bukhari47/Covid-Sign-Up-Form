import React, { useState } from "react";
import { Form, Row, Col, Input, Select, Upload } from "antd";

const { Option } = Select;

function InsuranceFeilds({ formName, form, field }) {
  const name = field !== undefined ? field.name : formName;
  const [fileList, setFileList] = useState([]);
  const uploadImageHandle = ({ fileList: newImagesList }) => {
    setFileList(newImagesList);
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
            name={[name, "insuranceCardNumber"]}
            label="Insurance Card Number"
            fieldKey={[field?.key, "insuranceCardNumber"]}
            tooltip="Enter your Insurance Card Number"
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
            hasFeedback
          >
            <Input placeholder="AB123456C" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={[name, "insuranceCompany"]}
            label="Select your insurance company"
            fieldKey={[field?.key, "insuranceCompany"]}
            rules={[{ required: true }]}
            hasFeedback
          >
            <Select placeholder="Select your insurance company" allowClear>
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
            name={[name, "insuranceCard"]}
            label="Front and Back side image of Insurance Card"
            rules={[{ required: true }]}
            fieldKey={[field?.key, "insuranceCard"]}
            tooltip="Upload your Front Side"
          >
            <Upload
              accept={[".jpg", ".png", ".jpeg"]}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onChange={uploadImageHandle}
            >
              {fileList.length < 2 && "+ Upload"}
            </Upload>
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

export default InsuranceFeilds;
