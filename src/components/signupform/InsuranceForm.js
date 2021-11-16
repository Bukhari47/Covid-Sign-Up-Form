import React from "react";
import { Form, Input, Select, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import validator from "validator";
const { Option } = { Select };

const InsuranceForm = ({
  insuranceDetails,
  validateMessages,
  uploadCardImage,
}) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const verifyNumber = (e) => {
    number = e.target.value;
    console.log("object");
    console.log(validator.isMobilePhone(number));
  };
  return (
    <Form
      name="nest-messages"
      onFinish={insuranceDetails}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["Insurance Details", "insuranceCardNumber"]}
        label="Phone Number"
        rules={[
          {
            message: "Phone Number is required",
            required: true,
          },
          {
            message: "Not a valid Phone Number",
            type: tel,
          },
        ]}
      >
        <Input style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        name={["Insurance Details", "insuranceCompany"]}
        label="Select your insurance company"
        rules={[{ required: true }]}
      >
        <Select style={{ width: "100%" }} defaultValue="Lucy" allowClear>
          <Option value="Adamjee Insurance Company Ltd">
            Adamjee Insurance Company Ltd
          </Option>
          <Option value="Asia Insurance Co Ltd">Asia Insurance Co Ltd</Option>
          <Option value="Askari General Insurance Company Ltd ">
            Askari General Insurance Company Ltd
          </Option>
          <Option value="Atlas Insurance Ltd ">
            Adamjee Insurance Company Ltd
          </Option>
          <Option value="Chubb Insurance Pakistan Ltd ">
            Chubb Insurance Pakistan Ltd
          </Option>
        </Select>
      </Form.Item>
      <Form.Item
        name={["Insurance Details", "Insurance Card"]}
        label="Upload front and back images of your insurance card"
        // valuePropName="fileList"
        // getValueFromEvent={uploadCardImage}
      >
        <Upload
          name={["Insurance Details", "Insurance Card"]}
          listType="picture"
          maxCount={2}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          accept=".png,.jpg,.jpeg"
        >
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default InsuranceForm;
