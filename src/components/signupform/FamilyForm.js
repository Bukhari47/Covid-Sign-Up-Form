import React, { useState } from "react";
import ProCard from "@ant-design/pro-card";
import {
  ProFormText,
  ProFormSelect,
  ProFormDatePicker,
} from "@ant-design/pro-form";
import { Form, Button, Row, Col } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import MemberInsuranceFields from "./MemberInsuranceFields";

function FamilyForm() {
  const [memberUUID, setMemberUUID] = useState([]);
  const [memberInsuranceStatus, setMemberInsuranceStatus] = useState();
  const [familyMembers, setFamilyMembers] = useState([]);
  const insuranceStatus = ["Same", "Other", "None"];
  return (
    <ProCard
      style={{
        marginBottom: 16,
        minWidth: 800,
        maxWidth: "100%",
      }}
    >
      <Row>
        <Col span={24}>
          <Form.List name="Family Members">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, fieldKey, ...restField }) => (
                  <Row>
                    <Col span={24}>
                      <ProFormText
                        {...restField}
                        name={[name, "Member UUID"]}
                        width="lg"
                        label="ID"
                        value={memberUUID[fieldKey]}
                        fieldKey={[fieldKey, "Member UUID"]}
                        disabled
                      />
                      <ProFormText
                        {...restField}
                        width="md"
                        name={[name, "firstName"]}
                        placeholder="Please Enter your First Name"
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
                      />
                      <ProFormText
                        {...restField}
                        width="md"
                        name={[name, "lastName"]}
                        fieldKey={[fieldKey, "lastName"]}
                        label="Last Name"
                        placeholder="Please Enter your Last Name"
                        rules={[
                          { required: true, message: `Field is required` },
                          {
                            pattern: /^[a-zA-Z ]+$/,
                            message:
                              "Name does not contain Number or Speacial Character",
                          },
                        ]}
                      />
                      <ProFormDatePicker
                        {...restField}
                        fieldKey={[fieldKey, "DOB"]}
                        name={[name, "DOB"]}
                        label="Date Of Birth"
                        placeholder="DOB"
                        rules={[{ required: true }]}
                      />
                      <ProFormSelect
                        {...restField}
                        name={[name, "insuranceStatus"]}
                        fieldKey={[fieldKey, "insuranceStatus"]}
                        label="Select your insurance status"
                        placeholder="Select your insurance status"
                        onChange={(value) => setMemberInsuranceStatus(value)}
                        options={insuranceStatus}
                        rules={[{ required: true }]}
                      />
                      <MemberInsuranceFields
                        insuranceStatusCheck={memberInsuranceStatus}
                      />
                      <Button onClick={() => remove(name)} danger>
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
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Col>
      </Row>
    </ProCard>
  );
}

export default FamilyForm;
