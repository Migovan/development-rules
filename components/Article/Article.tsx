import React, { useState, useEffect, useContext } from "react";
import TextEditor from "../../components/TextEditor/TextEditor";
import { Wrapper, EditIcon } from "./styles";
import InfoAboutArticle from "../common/InfoAboutArticle/InfoAboutArticle";
import UserDataContext from "../../components/Context/user-data";
import { parseHtml } from "../../utils";
import { getArticle } from "../../ api/request";
import { useRouter } from "next/router";

const Article = () => {
  const [articleData, setArticleData] = useState<any>({ data: {}, html: "" });
  const [isEdit, setIsEdit] = useState(false);
  const { userData } = useContext(UserDataContext);
  const router = useRouter();
  const articleId = router.query.id;
  const photoUrl = userData?.photo_url;

  useEffect(() => {
    getArticle(articleId, setArticleData);
  }, [articleData?.data?.title]);

  const article = () => {
    return (
      articleData?.data?.content && (
        <div style={{ marginTop: "30px" }}>
          <InfoAboutArticle photoUrl={photoUrl} date={articleData?.data?.date} />
          <div style={{ display: "flex" }}>
            <Wrapper>
              <h1>{articleData?.data?.title}</h1>
              <div
                style={{ lineHeight: "1.6em" }}
                dangerouslySetInnerHTML={{ __html: articleData?.html }}
              />
              <hr style={{ marginTop: "40px" }} />
            </Wrapper>
            <EditIcon onClick={() => setIsEdit(!isEdit)} />
          </div>
        </div>
      )
    );
  };

  return (
    <>
      {isEdit ? (
        <TextEditor
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          editingArticleData={articleData}
          setEditingArticleData={setArticleData}
        />
      ) : (
        article()
      )}
    </>
  );
};

export default Article;
