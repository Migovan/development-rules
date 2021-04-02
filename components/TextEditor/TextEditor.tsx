import React, { useState, useRef } from "react";
import EditorJs from "react-editor-js";
import tools from "./tools";
import initial_data from "./initial_data";
import { TextArea, Editor, StyledInput } from "./styles";
import { sendArticle, editArticle } from "../../ api/request";
import Button from "../common/Button/Button";

const TextEditor = ({ editingArticleData, setEditingArticleData, isEdit, setIsEdit }) => {
  const editContent = isEdit && JSON.parse(editingArticleData?.articleData?.content);

  const [data, setData] = useState(editContent || initial_data);
  const [title, setTitle] = useState(editingArticleData?.articleData?.title || "");
  const [description, setDescription] = useState(
    editingArticleData?.articleData?.description || "",
  );

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
      id: editingArticleData?.data?.id,
      date: editingArticleData?.data?.date,
    };

    if (isEdit) {
      setIsEdit(!isEdit);
      editArticle(editedArticleData, setEditingArticleData, editingArticleData?.data?.id);
    } else {
      sendArticle("/api/articles", articleData);
    }

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
              placeholder="Здесь вы можете написать что угодно..."
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
        <Button onClick={handleSave} width="200px" disabled={title && description ? false : true}>
          {isEdit ? "Сохранить изменения" : "Опубликовать статью"}
        </Button>
      </div>
    </div>
  );
};

export default TextEditor;
