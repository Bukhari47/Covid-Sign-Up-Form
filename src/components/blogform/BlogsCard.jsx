import { Card, Typography } from "antd";
import React from "react";
const { Text } = Typography;

function BlogsCard({ blog }) {
  return (
    <Card title={blog.title} bordered={false} className="blog-card-style">
      <Text>{blog.content}</Text>
    </Card>
  );
}

export default BlogsCard;
