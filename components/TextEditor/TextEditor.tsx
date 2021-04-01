import React, { useState, useRef } from "react";
import EditorJs from "react-editor-js";
import tools from "./tools";
import initial_data from "./initial_data";
import { Buttons, TextArea, Editor, StyledInput } from "./styles";
import { sendArticle, editArticle } from "../../ api/request";
import Button from "../common/Button/Button";

const TextEditor = ({ editingArticleData, isEdit }) => {
  const editContent = isEdit && JSON.parse(editingArticleData.content);

  const [data, setData] = useState(editContent || initial_data);
  const [title, setTitle] = useState(editingArticleData?.title || "");
  const [description, setDescription] = useState(editingArticleData?.description || "");

  const instanceRef = useRef(null);

  async function handleSave() {
    const savedData = await instanceRef.current.save();
    setData(savedData);

    const articleData = {
      authorId: "480270423",
      content: JSON.stringify(savedData),
      description,
      title,
    };

    const editedArticleData = {
      authorId: "480270423",
      content: JSON.stringify(savedData),
      description,
      title,
      id: editingArticleData && editingArticleData.id,
      date: editingArticleData && editingArticleData.date,
    };

    isEdit ? editArticle(editedArticleData) : sendArticle("/api/articles", articleData);
    setTitle("");
    instanceRef.current.clear();
    setData(initial_data);
    setDescription("");
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <div style={{ width: "650px" }}>
          <Editor>
            <StyledInput
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Заголовок..."
            />
            <EditorJs
              data={data}
              tools={tools}
              instanceRef={(instance) => (instanceRef.current = instance)}
            />
          </Editor>
          <TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Добавьте описание к вашей статьей..."
          />
        </div>
        {/* <hr /> */}
        <Button onClick={handleSave} width="200px">
          Опубликовать статью
        </Button>
      </div>
    </div>
  );
};

export default TextEditor;
