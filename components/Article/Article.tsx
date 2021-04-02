import React, { useState, useEffect, useContext } from "react";
import TextEditor from "../../components/TextEditor/TextEditor";
import { Wrapper, EditIcon } from "./styles";
import InfoAboutArticle from "../common/InfoAboutArticle/InfoAboutArticle";
import UserDataContext from "../../components/Context/user-data";
import { parseHtml } from "../../utils";

const Article = ({ articleData }) => {
  const [data, setData] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const { userData } = useContext(UserDataContext);

  const photoUrl = userData?.photo_url;
  const { content, title, date } = articleData;

  useEffect(() => {
    parseHtml(JSON.parse(content), setData);
  }, []);

  const article = () => {
    return (
      data && (
        <div style={{ marginTop: "30px" }}>
          <InfoAboutArticle photoUrl={photoUrl} date={date} />
          <div style={{ display: "flex" }}>
            <Wrapper>
              <h1>{title}</h1>
              <div style={{ lineHeight: "1.6em" }} dangerouslySetInnerHTML={{ __html: data }} />
              <hr style={{ marginTop: "40px" }} />
            </Wrapper>
            <EditIcon onClick={() => setIsEdit(!isEdit)} />
          </div>
        </div>
      )
    );
  };

  return <>{isEdit ? <TextEditor isEdit={true} editingArticleData={articleData} /> : article()}</>;
};

export default Article;
