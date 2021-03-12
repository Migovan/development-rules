import React, { useState, useRef } from "react";
import EditorJs from "react-editor-js";

import tools from "./tools";
import initial_data from "./initial_data";

const Redactor = () => {
  const [data, setData] = useState(initial_data);
  const instanceRef = useRef(null);

  async function handleSave() {
    const savedData = await instanceRef.current.save();
    setData(savedData);
  }
  console.log("datda:", data);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ width: "650px" }}>
        <EditorJs
          data={data}
          tools={tools}
          instanceRef={(instance) => (instanceRef.current = instance)}
        />
      </div>
      <button style={{ width: "100px" }} onClick={handleSave}>
        save
      </button>
    </div>
  );
};

export default Redactor;
