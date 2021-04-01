import React, { useState, useEffect } from "react";
import TextEditor from "../../components/TextEditor/TextEditor";
import { Wrapper, EditIcon } from "./styles";

const parseHtml = (content, setData) => {
  let html = "";
  content?.blocks?.length > 0 &&
    content.blocks.forEach(function (block) {
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

  setData(html);
};

const Article = ({ articleData }) => {
  const [data, setData] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const { content, title, date } = articleData;

  useEffect(() => {
    parseHtml(JSON.parse(content), setData);
  }, []);

  const article = () => {
    return (
      data && (
        <div style={{ display: "flex" }}>
          <Wrapper>
            <h1>{title}</h1>
            <div style={{ lineHeight: "1.6em" }} dangerouslySetInnerHTML={{ __html: data }} />
            {/* <button onClick={() => setIsEdit(!isEdit)}>edit</button> */}
          </Wrapper>
          <EditIcon onClick={() => setIsEdit(!isEdit)} />
        </div>
      )
    );
  };

  return <>{isEdit ? <TextEditor isEdit={true} editingArticleData={articleData} /> : article()}</>;
};

export default Article;
