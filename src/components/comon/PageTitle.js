import React from "react";
import { PageHeader } from "antd";

function PageTitle({ title, subtitle }) {
  return <PageHeader title={title} subTitle={subtitle} />;
}

export default PageTitle;
