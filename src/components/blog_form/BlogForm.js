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

  return (
    <Card>
      <Row>
        <Col span={24}>
          <Form form={form} onFinish={submitHandler}>
            <Row>
              <Col span={8}>
                <Form.Item
                  name="Title"
                  label="Blog Title"
                  tooltip="Enter your blog title"
                  rules={[{ required: true }]}
                  hasFeedback
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={20}>
                <Form.Item
                  name="Content"
                  label="Blog Content"
                  tooltip="Enter your blog content"
                  rules={[{ required: true }]}
                  hasFeedback
                >
                  <TextArea />
                </Form.Item>
              </Col>
              <Form.Item
                name="Image"
                label="Blog Image"
                rules={[{ required: true }]}
                tooltip="Upload your Cover Image"
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
