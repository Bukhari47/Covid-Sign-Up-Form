import React from "react";

import { Form, Button, Row, Col, Input, Select, Card } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import MemberInsuranceFields from "./MemberInsuranceFields";

const { Option } = Select;

function FamilyForm({ form }) {
  const insuranceStatus = ["Same", "Other", "None"];

  return (
    <Card title="Family Info" bordered={false} className="Card">
      <Col span={24}>
        <Form.List name="Family">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ name, fieldKey }) => (
                <Row>
                  <Col span={24}>
                    <Form.Item
                      initialValue={uuidv4()}
                      name={[name, "MemberUUID"]}
                      label="ID"
                    >
                      <Input disabled />
                    </Form.Item>
                    <Col span={12}>
                      <Form.Item
                        name={[name, "firstName"]}
                        fieldKey={[fieldKey, "firstName"]}
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
                    <Col span={12}>
                      <Form.Item
                        name={[name, "lastName"]}
                        fieldKey={[fieldKey, "lastName"]}
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
                    <Form.Item
                      name={[name, "DOB"]}
                      fieldKey={[fieldKey, "DOB"]}
                      label="Date Of Birth"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="DOB" type="date" />
                    </Form.Item>
                    <Form.Item
                      name={[name, "insuranceStatus"]}
                      fieldKey={[fieldKey, "insuranceStatus"]}
                      label="Select your insurance status"
                      options={insuranceStatus}
                      initialValue=""
                      rules={[{ required: true }]}
                    >
                      <Select
                        onChange={(e) => {
                          console.log("Changes", e);
                          form.setFieldValue("insuranceStatus", e);
                          console.log(
                            "Insurance Status",
                            form.setFieldValue("insuranceStatus")
                          );
                        }}
                        placeholder="Select Insurance Status"
                        allowClear
                      >
                        {form.getFieldsValue().Insurance.HaveInsurance ? (
                          <Option value="Same">Same</Option>
                        ) : (
                          <Option disabled>Same</Option>
                        )}
                        <Option value="Other">Other</Option>
                        <Option value="None">None</Option>
                      </Select>
                    </Form.Item>
                    <MemberInsuranceFields
                      form={form}
                      // field={fieldKey}
                      index={fieldKey}
                      formName="Family"
                    />
                    <Button
                      onClick={() => {
                        console.log(
                          "Remove Clicked",
                          form.getFieldsValue().Family.splice(name, 1)
                        );

                        remove(name);
                      }}
                      danger
                      block
                    >
                      Remove Member
                      <MinusCircleOutlined />
                    </Button>
                  </Col>
                </Row>
              ))}
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
            </>
          )}
        </Form.List>
      </Col>
    </Card>
  );
}

export default FamilyForm;
