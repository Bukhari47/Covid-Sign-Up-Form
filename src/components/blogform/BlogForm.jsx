import React, { useState } from "react";
import { Row, Col, Form, Input, Card, Button, Upload } from "antd";
const { TextArea } = Input;

function BlogForm({ blogDetails }) {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const uploadImageHandle = ({ fileList: newImagesList }) => {
    setFileList(newImagesList);
  };
  const submitHandler = (values) => {
    blogDetails(values);
    setTimeout(() => {
      form.resetFields();
    }, 100);
  };
  const fieldCol = {
    xxl: { span: 11, offset: 1 },
    xl: { span: 11, offset: 1 },
    lg: { span: 11, offset: 1 },
    md: { span: 24 },
    xs: { span: 24 },
    sm: { span: 24 },
  };
  return (
    <Card>
      <Row>
        <Col span={24}>
          <Form form={form} onFinish={submitHandler}>
            <Row>
              <Col {...fieldCol}>
                <Form.Item
                  name="Title"
                  label="Blog Title"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col {...fieldCol}>
                <Form.Item
                  name="Content"
                  label="Blog Content"
                  rules={[{ required: true }]}
                >
                  <TextArea />
                </Form.Item>
              </Col>
              <Col {...fieldCol}>
                <Form.Item
                  name="Image"
                  label="Blog Image"
                  rules={[{ required: true }]}
                >
                  <Upload
                    accept={[".jpg", ".png", ".jpeg"]}
                    listType="picture-card"
                    fileList={fileList}
                    onChange={uploadImageHandle}
                  >
                    {fileList.length < 2 && "+ Upload"}
                  </Upload>
                </Form.Item>
              </Col>
            </Row>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  );
}

export default BlogForm;
