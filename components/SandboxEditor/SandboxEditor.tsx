import React, { useState, useRef } from "react";
import EditorJs from "react-editor-js";
import tools from "./tools";
import initial_data from "./initial_data";
import { sendArticle } from "../../ api/request";

const Redactor = () => {
  const [data, setData] = useState(initial_data);
  const [htmlData, setHtmlData] = useState("");

  const instanceRef = useRef(null);

  async function handleSave() {
    let html = "";
    const savedData = await instanceRef.current.save();
    setData(savedData);

    savedData.blocks.forEach(function (block) {
      switch (block.type) {
        case "header":
          html += `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
          break;
        case "paragraph":
          html += `<p>${block.data.text}</p>`;
          break;
        case "delimiter":
          html += "<hr />";
          break;
        case "image":
          html += `<img class="img-fluid" src="${block.data.file.url}" title="${block.data.caption}" /><br /><em>${block.data.caption}</em>`;
          break;
        case "list":
          html += "<ul>";
          block.data.items.forEach(function (li) {
            html += `<li>${li}</li>`;
          });
          html += "</ul>";
          break;
        default:
          console.log("Unknown block type", block.type);
          console.log(block);
          break;
      }

      setHtmlData(html);
    });
    sendArticle("/api/articles", {
      authorId: "480270423",
      content: html,
      // id: "480270423",
    });
  }

  console.log("htmlData: ", htmlData);

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
      {/* {htmlData && <div dangerouslySetInnerHTML={{ __html: htmlData }} />} */}
    </div>
  );
};

export default Redactor;
