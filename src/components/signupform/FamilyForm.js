import React, { useState } from "react";
import ProCard from "@ant-design/pro-card";

import { Form, Button, Row, Col, Input, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import MemberInsuranceFields from "./MemberInsuranceFields";

const { Option } = Select;

function FamilyForm() {
  const [memberUUID, setMemberUUID] = useState([]);
  const [memberInsuranceStatus, setMemberInsuranceStatus] = useState([]);
  const insuranceStatus = ["Same", "Other", "None"];
  console.log("array", { memberInsuranceStatus });
  console.log("array", { memberUUID });

  const handleStatusChange = (value) => {
    console.log(
      "Handle Status Change >=>",
      value,
      memberUUID[fieldKey],
      memberInsuranceStatus.findIndex(
        (MIS) => MIS.uuid === memberUUID[fieldKey]
      )
    );
    if (
      memberInsuranceStatus.findIndex(
        (MIS) => MIS.uuid === memberUUID[fieldKey]
      )
    ) {
      setMemberInsuranceStatus([
        ...memberInsuranceStatus,
        {
          value,
        },
      ]);
    } else {
      setMemberInsuranceStatus([
        ...memberInsuranceStatus,
        {
          uuid: memberUUID[fieldKey],
          value,
        },
      ]);
    }
  };

  return (
    <ProCard className="proCardStyle">
      <Row>
        <Col span={24}>
          <Form.List name="Family Members">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, fieldKey, ...restField }) => (
                  <Row>
                    <Col span={24}>
                      <Form.Item
                        name={["Personal Info", "Personal UUID"]}
                        label="ID"
                      >
                        <Input disabled defaultValue={uuidv4()} />
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
                        // placeholder="Select your insurance status"
                        options={insuranceStatus}
                        rules={[{ required: true }]}
                      >
                        <Select
                          onChange={handleStatusChange}
                          placeholder="Select a option and change input text above"
                          allowClear
                        >
                          {insuranceStatus.map((status) => (
                            <Option value={status}>{status}</Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <MemberInsuranceFields
                        key={memberUUID[fieldKey]}
                        insuranceStatusCheck={memberInsuranceStatus}
                        formName={name}
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
