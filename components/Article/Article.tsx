import React, { useState, useEffect, useContext } from "react";
import TextEditor from "../../components/TextEditor/TextEditor";
import { StyledArticle, EditIcon } from "./styles";
import { FlexBox } from "../../common-styles/styles";
import InfoAboutArticle from "../common/InfoAboutArticle/InfoAboutArticle";
import UserDataContext from "../../components/Context/user-data";
import { getArticle } from "../../ api/request";
import LoaderWrapper from "../../components/common/hoc/LoaderWrapper/LoaderWrapper";
import { useRouter } from "next/router";

interface PropsData {
  articleData: any;
  html: string;
  isLoading: boolean;
}

const Article = () => {
  const router = useRouter();
  const { userData } = useContext(UserDataContext);
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState<PropsData>({ articleData: {}, html: "", isLoading: false });

  const articleId = router.query.id;
  const photoUrl = userData?.photo_url;
  const { articleData, html, isLoading } = data;

  useEffect(() => {
    getArticle(articleId, data, setData);
  }, []);

  const article = () => {
    return (
      <>
        <InfoAboutArticle photoUrl={photoUrl} date={articleData?.date} />
        <FlexBox>
          <StyledArticle>
            <h1>{articleData?.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <hr />
          </StyledArticle>
          <EditIcon onClick={() => setIsEdit(!isEdit)} />
        </FlexBox>
      </>
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
