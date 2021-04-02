import React, { useState, useEffect, useContext } from "react";
import TextEditor from "../../components/TextEditor/TextEditor";
import { Wrapper, EditIcon } from "./styles";
import InfoAboutArticle from "../common/InfoAboutArticle/InfoAboutArticle";
import UserDataContext from "../../components/Context/user-data";
import { getArticle } from "../../ api/request";
import LoaderWrapper from "../../components/common/hoc/LoaderWrapper/LoaderWrapper";

import { useRouter } from "next/router";

const Article = () => {
  const [data, setData] = useState<any>({ articleData: {}, html: "", isLoading: false });
  const [isEdit, setIsEdit] = useState(false);
  const { userData } = useContext(UserDataContext);
  const router = useRouter();
  const articleId = router.query.id;
  const photoUrl = userData?.photo_url;
  const isLoading = data.isLoading;

  useEffect(() => {
    getArticle(articleId, data, setData);
  }, [data?.articleData?.title]);

  const article = () => {
    return data?.articleData?.content ? (
      <div style={{ marginTop: "30px" }}>
        <InfoAboutArticle photoUrl={photoUrl} date={data?.articleData?.date} />
        <div style={{ display: "flex" }}>
          <Wrapper>
            <h1>{data?.articleData?.title}</h1>
            <div style={{ lineHeight: "1.6em" }} dangerouslySetInnerHTML={{ __html: data?.html }} />
            <hr style={{ marginTop: "40px" }} />
          </Wrapper>
          <EditIcon onClick={() => setIsEdit(!isEdit)} />
        </div>
      </div>
    ) : (
      <></>
    );
  };

  return (
    <>
      {isEdit ? (
        <TextEditor
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          editingArticleData={data}
          setEditingArticleData={setData}
        />
      ) : (
        <LoaderWrapper isLoading={isLoading}>{article()}</LoaderWrapper>
      )}
    </>
  );
};

export default Article;
