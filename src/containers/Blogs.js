import { Col, Divider, Row } from "antd";
import React, { useState } from "react";
import BlogForm from "../components/blogform/BlogForm.jsx";
import BlogsCard from "../components/blogform/BlogsCard.jsx";
import PageTitle from "../components/comon/headers/PageTitle.jsx";
import { v4 as uuidv4 } from "uuid";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const blogDetails = (value) => {
    console.log("All...", value.Image.fileList);
    setBlogs([
      ...blogs,
      {
        uuid: uuidv4(),
        title: value.Title,
        content: value.Content,
      },
    ]);
  };
  console.log(blogs);
  return (
    <Row>
      <Col span={24}>
        <PageTitle title={"Blogs"} subtitle={"Stay updated"} />
        <Row>
          <Col span={4}></Col>
          <Col span={16}>
            <BlogForm blogDetails={blogDetails} />
          </Col>
          <Col span={4}></Col>
        </Row>
        <Divider />
        <Row>
          {blogs?.map((blog) => (
            <Col>
              <BlogsCard blog={blog} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}

export default Blogs;
