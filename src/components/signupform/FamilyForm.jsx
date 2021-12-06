import React from "react";

import {
  Form,
  Button,
  Row,
  Col,
  Input,
  Select,
  Card,
  DatePicker,
  Divider,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import MemberInsuranceFields from "./MemberInsuranceFields.jsx";

const { Option } = Select;

function FamilyForm({ fieldCol, form }) {
  const insuranceStatus = ["Same", "Other", "None"];
  return (
    <Card title="Family Info">
      <Form.List name="Family">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <>
                <Row>
                  <Col {...fieldCol}>
                    <Form.Item
                      initialValue={uuidv4()}
                      name={[field.name, "memberUUID"]}
                      fieldKey={[field.fieldKey, "memberUUID"]}
                      label="ID"
                    >
                      <Input disabled />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col {...fieldCol}>
                    <Form.Item
                      name={[field.name, "firstName"]}
                      fieldKey={[field.fieldKey, "firstName"]}
                      label="First Name"
                      rules={[
                        { required: true, message: `Field is required` },
                        {
                          pattern: /^[a-zA-Z ]+$/,
                          message:
                            "Name does not contain Number or Speacial Character",
                        },
                      ]}
                    >
                      <Input placeholder="Jhon" />
                    </Form.Item>
                  </Col>
                  <Col {...fieldCol}>
                    <Form.Item
                      name={[field.name, "lastName"]}
                      fieldKey={[field.key, "lastName"]}
                      label="Last Name"
                      rules={[
                        { required: true, message: `Field is required` },
                        {
                          pattern: /^[a-zA-Z ]+$/,
                          message:
                            "Name does not contain Number or Speacial Character",
                        },
                      ]}
                    >
                      <Input placeholder="Doe" />
                    </Form.Item>
                  </Col>
                  <Col {...fieldCol}>
                    <Form.Item
                      name={[field.name, "DOB"]}
                      fieldKey={[field.key, "DOB"]}
                      label="Date Of Birth"
                      rules={[{ required: true }]}
                    >
                      <DatePicker className="datepicker-width" />
                    </Form.Item>
                  </Col>
                  <Col {...fieldCol}>
                    <Form.Item
                      name={[field.name, "insuranceStatus"]}
                      fieldKey={[field.key, "insuranceStatus"]}
                      label="Select your insurance status"
                      options={insuranceStatus}
                      initialValue=""
                      rules={[{ required: true }]}
                    >
                      <Select
                        onChange={(e) => {
                          form.setFieldsValue({ insuranceStatus: e });
                        }}
                        placeholder="Select Insurance Status"
                        allowClear
                      >
                        {form.getFieldsValue().Insurance?.HaveInsurance ? (
                          <Option value="Same">Same</Option>
                        ) : (
                          <Option disabled>Same</Option>
                        )}
                        <Option value="Other">Other</Option>
                        <Option value="None">None</Option>
                      </Select>
                    </Form.Item>
                  </Col>

                  <MemberInsuranceFields
                    form={form}
                    field={field}
                    fieldCol={fieldCol}
                    formName="Family"
                  />
                  <Col {...fieldCol}>
                    <Button
                      onClick={() => {
                        remove(field.name);
                      }}
                      danger
                      block
                    >
                      Remove Member
                      <MinusCircleOutlined />
                    </Button>
                  </Col>
                  <Divider />
                </Row>
              </>
            ))}
            <Col {...fieldCol}>
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    add();
                  }}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Family Member
                </Button>
              </Form.Item>
            </Col>
          </>
        )}
      </Form.List>
    </Card>
  );
}

export default FamilyForm;
