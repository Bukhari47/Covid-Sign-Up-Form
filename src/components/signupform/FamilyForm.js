import React, { useEffect, useState } from "react";

import { Form, Button, Row, Col, Input, Select, Card } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import MemberInsuranceFields from "./MemberInsuranceFields";

const { Option } = Select;

function FamilyForm({ form }) {
  const [memberUUID, setMemberUUID] = useState([]);
  const [memberInsuranceStatus, setMemberInsuranceStatus] = useState([]);
  const insuranceStatus = ["Same", "Other", "None"];

  const handleStatusChange = (value, uuid) => {
    const uuidIndexFound = memberInsuranceStatus.findIndex(
      (MIS) => MIS.uuid === uuid
    );
    if (uuidIndexFound >= 0) {
      const tempStatus = [...memberInsuranceStatus];
      tempStatus[uuidIndexFound].value = value;
      setMemberInsuranceStatus(tempStatus);
    } else {
      setMemberInsuranceStatus([
        ...memberInsuranceStatus,
        {
          uuid,
          value,
        },
      ]);
    }
  };

  return (
    <Card title="Family Info" bordered={false} className="Card">
      <Col span={24}>
        <Form.List name="Family">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ name, fieldKey, ...restField }) => (
                <Row>
                  <Col span={24}>
                    <Form.Item name={[name, "Member UUID"]} label="ID">
                      <Input disabled defaultValue={memberUUID[fieldKey]} />
                    </Form.Item>
                    <Col span={12}>
                      <Form.Item
                        {...restField}
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
                        {...restField}
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
                      {...restField}
                      fieldKey={[fieldKey, "DOB"]}
                      name={[name, "DOB"]}
                      label="Date Of Birth"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="DOB" type="date" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "insuranceStatus"]}
                      fieldKey={[fieldKey, "insuranceStatus"]}
                      label="Select your insurance status"
                      options={insuranceStatus}
                      rules={[{ required: true }]}
                    >
                      <Select
                        onChange={(value) => {
                          handleStatusChange(value, memberUUID[fieldKey]);
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
                      MUUID={memberUUID[fieldKey]}
                      insuranceStatusCheck={memberInsuranceStatus}
                      formName="Family"
                    />
                    <Button
                      onClick={() => {
                        memberInsuranceStatus.filter(
                          (MIS) => MIS.uuid !== memberUUID[fieldKey]
                        );
                        remove(name);
                      }}
                      danger
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
                    setMemberUUID([...memberUUID, uuidv4()]);
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
