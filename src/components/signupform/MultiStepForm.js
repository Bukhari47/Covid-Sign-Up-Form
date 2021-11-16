import React from "react";
import ProForm, {
  StepsForm,
  ProFormText,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormCheckbox,
  ProFormDigit,
} from "@ant-design/pro-form";

import ProCard from "@ant-design/pro-card";
import {
  Col,
  message,
  Row,
  Form,
  Select,
  Input,
  InputNumber,
  Upload,
  Button,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const waitTime = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default ({ snapshotUpload }) => {
  return (
    <>
      <StepsForm
        onFinish={async (values) => {
          console.log(values);
          await waitTime(1000);
          message.success("Saved");
        }}
        formProps={{
          validateMessages: {
            required: "${label} Field Cannot be empty",
          },
        }}
      >
        <StepsForm.StepForm
          name="base"
          title="Personal Info"
          onFinish={async () => {
            await waitTime(2000);
            return true;
          }}
        >
          <ProCard
            title="Name"
            bordered
            headerBordered
            collapsible
            style={{
              marginBottom: 16,
              minWidth: 800,
              maxWidth: "100%",
            }}
          >
            <Row>
              <Col span={12}>
                <ProFormText
                  name={["Personal Info", "firstName"]}
                  width="md"
                  label="First Name"
                  tooltip="Enter your first name"
                  placeholder="John"
                  rules={[
                    { required: true },
                    {
                      pattern: /^[a-zA-Z ]+$/,
                      message:
                        "Name does not contain Number or Speacial Character",
                    },
                  ]}
                />
              </Col>
              <Col span={12}>
                <ProFormText
                  name={["Personal Info", "lastName"]}
                  width="md"
                  label="Last Name"
                  tooltip="Enter your first name"
                  placeholder="Doe"
                  rules={[
                    { required: true },
                    {
                      pattern: /^[a-zA-Z ]+$/,
                      message:
                        "Name does not contain Number or Speacial Character",
                    },
                  ]}
                />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <ProFormText
                  name={["Personal Info", "email"]}
                  width="md"
                  label="Email"
                  tooltip="Enter your Email"
                  placeholder="John"
                  rules={[
                    { type: "email", required: true },
                    {
                      pattern:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Pattern should be in user@example.com",
                    },
                  ]}
                />
              </Col>
              <Col span={12}>
                <ProFormText
                  name={["Personal Info", "phone"]}
                  label="Phone Number"
                  width="md"
                  placeholder={"Mobile phone number"}
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number! ",
                    },
                    {
                      pattern: /^\(?(\d{4})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
                      message: "Mobile phone number format is wrong! ",
                    },
                  ]}
                />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <ProFormDatePicker
                  name={["Personal Info", "DOB"]}
                  label="Date Of Birth"
                  width="md"
                  placeholder=""
                  rules={[{ required: true }]}
                />
              </Col>
              <Col span={12}>
                <Form.Item
                  name={["Personal Info", "gender"]}
                  label="Gender"
                  rules={[{ required: true }]}
                >
                  <Select placeholder="Gender" allowClear>
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={48}>
              <Col span={12}>
                {" "}
                <Form.Item
                  name={["Personal Info", "address"]}
                  label="Address"
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
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={["Personal Info", "city"]}
                  label="City"
                  rules={[
                    {
                      required: true,
                    },
                    {
                      pattern: /^[a-zA-Z0-9\s,'-]*$/,
                      message: "City does not conttain Special Charaters",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={48}>
              <Col span={12}>
                <Form.Item
                  name={["Personal Info", "State"]}
                  label="State"
                  rules={[
                    {
                      required: true,
                    },
                    {
                      pattern: /^[a-zA-Z0-9\s,'-]*$/,
                      message: "State does not conttain Special Charaters",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={["Personal Info", "zipcode"]}
                  label="Zip Code"
                  rules={[
                    {
                      type: "number",
                      required: true,
                    },
                    {
                      pattern: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
                      message: "Please specify a valid US zip code.",
                    },
                  ]}
                >
                  <InputNumber />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Item
                  name={["Personal Info", "snapshot"]}
                  label="Snapshot"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  valuePropName="Snapshot List"
                  getValueFromEvent={snapshotUpload}
                >
                  <Upload
                    name="snapshot"
                    listType="picture"
                    maxCount={2}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    accept=".png,.jpg,.jpeg"
                  >
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                  </Upload>
                </Form.Item>
              </Col>
            </Row>
          </ProCard>

          <ProCard
            title="Insurance"
            bordered
            headerBordered
            collapsible
            style={{
              minWidth: 800,
              marginBottom: 16,
            }}
          >
            <ProFormDigit
              name="xs"
              label="XS号表单"
              initialValue={9999}
              tooltip="悬浮出现的气泡。"
              placeholder="请输入名称"
              width="xs"
            />
            <ProFormText
              name="s"
              label="S号表单"
              placeholder="请输入名称"
              width="sm"
            />
            <ProFormDateRangePicker
              name="Date Of Birth"
              label="Date Of Birth"
            />
            <ProFormSelect
              name="l"
              label="L 号表单"
              fieldProps={{
                mode: "tags",
              }}
              width="lg"
              initialValue={["吴家豪", "周星星"]}
              options={["吴家豪", "周星星", "陈拉风"].map((item) => ({
                label: item,
                value: item,
              }))}
            />
          </ProCard>
        </StepsForm.StepForm>
        <StepsForm.StepForm name="checkbox" title="第二步骤">
          <ProCard
            style={{
              minWidth: 800,
              marginBottom: 16,
              maxWidth: "100%",
            }}
          >
            <ProFormCheckbox.Group
              name="checkbox"
              label="迁移类型"
              width="lg"
              options={["结构迁移", "全量迁移", "增量迁移", "全量校验"]}
            />
            <ProForm.Group>
              <ProFormText name="dbname" label="业务 DB 用户名" />
              <ProFormDatePicker
                name="datetime"
                label="记录保存时间"
                width="sm"
              />
            </ProForm.Group>
            <ProFormCheckbox.Group
              name="checkbox"
              label="迁移类型"
              options={["完整 LOB", "不同步 LOB", "受限制 LOB"]}
            />
          </ProCard>
        </StepsForm.StepForm>
        <StepsForm.StepForm name="time" title="第三步骤">
          <ProCard
            style={{
              marginBottom: 16,
              minWidth: 800,
              maxWidth: "100%",
            }}
          >
            <ProFormCheckbox.Group
              name="checkbox"
              label="部署单元"
              rules={[
                {
                  required: true,
                },
              ]}
              options={["部署单元1", "部署单元2", "部署单元3"]}
            />
            <ProFormSelect
              label="部署分组策略"
              name="remark"
              rules={[
                {
                  required: true,
                },
              ]}
              width="md"
              initialValue="1"
              options={[
                {
                  value: "1",
                  label: "策略一",
                },
                { value: "2", label: "策略二" },
              ]}
            />
            <ProFormSelect
              label="Pod 调度策略"
              name="remark2"
              width="md"
              initialValue="2"
              options={[
                {
                  value: "1",
                  label: "策略一",
                },
                { value: "2", label: "策略二" },
              ]}
            />
          </ProCard>
        </StepsForm.StepForm>
      </StepsForm>
    </>
  );
};
