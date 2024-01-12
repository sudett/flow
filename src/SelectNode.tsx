import { Space } from "antd";

function SelectNode() {
  const handleChange = (event) => {
    console.log(event);
  };

  return (
    <Space direction="vertical">
      <select onChange={handleChange}>
        <option value="jack">Jack</option>
        <option value="john">John</option>
        <option value="lucy">Lucy</option>
        <option value="ali">Ali</option>
      </select>
    </Space>
  );
}

export default SelectNode;
