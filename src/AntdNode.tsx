import { Space, Select } from "antd";

function AntdNode() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Space direction="vertical">
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: "jack", label: "Jack" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
          { value: "disabled", label: "Disabled", disabled: true },
        ]}
      />
    </Space>
  );
}

export default AntdNode;
