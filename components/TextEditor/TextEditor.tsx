import React, { useState, useRef } from "react";
import EditorJs from "react-editor-js";
import tools from "./tools";
import initial_data from "./initial_data";
import { Buttons, TextArea } from "./styles";
import { sendArticle } from "../../ api/request";
import Button from "../common/Button/Button";

const TextEditor = () => {
  const [data, setData] = useState(initial_data);
  const [isShowOtherSettings, setIsShowOtherSettings] = useState(false);

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
    });

    sendArticle("/api/articles", {
      authorId: "480270423",
      content: html,
    });
  }
  console.log("dafta: ", data.blocks);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {!isShowOtherSettings ? (
        <>
          <div style={{ width: "650px" }}>
            <EditorJs
              data={data}
              tools={tools}
              instanceRef={(instance) => (instanceRef.current = instance)}
            />
          </div>
          <Button onClick={() => setIsShowOtherSettings(!isShowOtherSettings)} width="200px">
            Перейти к настройкам
          </Button>
        </>
      ) : (
        <div style={{ width: "450px" }}>
          <TextArea placeholder="Добавьте описание к вашей статьей..." />
          <Buttons>
            <Button
              onClick={() => {
                setIsShowOtherSettings(!isShowOtherSettings);
              }}
              width="200px"
            >
              Вернуться назад
            </Button>
            <Button onClick={handleSave} width="200px">
              Опубликовать статью
            </Button>
          </Buttons>
        </div>
      )}
    </div>
  );
};

export default TextEditor;
