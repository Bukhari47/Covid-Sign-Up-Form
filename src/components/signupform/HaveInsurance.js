import React from "react";

import {
  ProFormText,
  ProFormSelect,
  ProFormUploadButton,
} from "@ant-design/pro-form";

import ProCard from "@ant-design/pro-card";

const HaveInsurance = () => {
  const insuranceCompanies = [
    "Adamjee Insurance Company Ltd",
    "Asia Insurance Co Ltd",
    "Atlas Insurance Ltd",
    "Chubb Insurance Pakistan Ltd",
    "CICL",
    "East West Insurance Company Ltd",
    "EFU Genera",
    "Habib Insurance Company Ltd",
    "IGI",
    "Jubilee General Insurance Co. Ltd",
    "PICIC (Pakistan Industrial Credit Investment Corporation)",
    "Premier Insurance Limited",
  ];
  return (
    <ProCard
      style={{
        minWidth: 800,
        marginBottom: 16,
        maxWidth: "100%",
      }}
    >
      <ProFormText
        name={["Insurance Details", "insuranceCardNumber"]}
        label="Insurance Card Number"
        width="md"
        placeholder={"Mobile phone number"}
        rules={[
          {
            required: true,
          },
          {
            pattern: /^\s*[a-zA-Z]{2}(?:\s*\d\s*){6}[a-zA-Z]?\s*$/,
            message:
              "Insurance card pattern didn't match pattern should be `ZK 123456 A`",
          },
        ]}
      />
      <ProFormSelect
        name={["Insurance Details", "insuranceCompany"]}
        label="Select your insurance company"
        placeholder="Select your insurance company"
        valueEnum={insuranceCompanies}
        rules={[{ required: true }]}
      />
      <ProFormUploadButton
        name={["Insurance Details", "Front and Back"]}
        label="Front and Back side image of Insurance Card"
        rules={[{ required: true }]}
        max={2}
        fieldProps={{
          name: "insurance-card",
          listType: "picture-card",
        }}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        accept=".png,.jpg,.jpeg"
      />
    </ProCard>
  );
};

export default HaveInsurance;
