import React from "react";

const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "materialnode")}
        draggable
      >
        MUI Node
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "antdnode")}
        draggable
      >
        ANTD Node
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "selectnode")}
        draggable
      >
        Select Node
      </div>
    </aside>
  );
};

export default Sidebar;
