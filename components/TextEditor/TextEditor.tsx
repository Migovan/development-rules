import React, { FC, useState, useRef, useContext } from "react";
import UserDataContext from "../../components/Context/user-data";
import EditorJs from "react-editor-js";
import tools from "./tools";
import initial_data from "./initial_data";
import { TextArea, Editor, StyledInput, Wrapper } from "./styles";
import { sendArticle, editArticle } from "../../ api/request";
import Button from "../common/Button/Button";

interface Props {
  isEdit?: boolean;
  editingArticleData?: any;
  setIsEdit?: (isEdit) => void;
  setEditingArticleData?: (editingArticleData) => void;
}

const TextEditor: FC<Props> = ({
  editingArticleData,
  setEditingArticleData,
  isEdit,
  setIsEdit,
}) => {
  const instanceRef = useRef(null);
  const { userData } = useContext(UserDataContext);

  const authorId = userData?.id;
  const articleData = editingArticleData?.articleData;
  const id = articleData?.id;
  const editContent = isEdit && JSON.parse(articleData?.content);

  const [data, setData] = useState(editContent || initial_data);
  const [title, setTitle] = useState(articleData?.title || "");
  const [description, setDescription] = useState(articleData?.description || "");

  async function handleSave() {
    const savedData = await instanceRef.current.save();
    setData(savedData);

    const newArticleData = {
      id,
      title,
      description,
      authorId,
      content: JSON.stringify(savedData),
    };

    if (isEdit) {
      setIsEdit(!isEdit);
      editArticle(id, newArticleData, setEditingArticleData);
    } else {
      sendArticle(newArticleData);
    }

    setTitle("");
    setDescription("");
    setData(initial_data);
    instanceRef.current.clear();
  }

  return (
    <Wrapper>
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
      <Button onClick={handleSave} width="200px" disabled={title && description ? false : true}>
        {isEdit ? "Сохранить изменения" : "Опубликовать статью"}
      </Button>
    </Wrapper>
  );
};

export default TextEditor;
