import { Col, Divider, Row } from "antd";
import React, { useState } from "react";
import BlogForm from "../components/blog_form/BlogForm";
import BlogsCard from "../components/blog_form/BlogsCard";
import PageTitle from "../components/comon/headers/PageTitle";
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
        <BlogForm blogDetails={blogDetails} />
        <Divider />
        <Row gutter={[20, 40]}>
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
