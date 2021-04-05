import React, { useState, useEffect, useContext } from "react";
import UserDataContext from "../../components/Context/user-data";
import Link from "next/link";
import InfoAboutArticle from "../common/InfoAboutArticle/InfoAboutArticle";
import { Wrapper, Title, Text, Description, DeleteIcon, ReadMore, ArrowRightIcon } from "./styles";
import { getArticlesIntro, deleteArticle } from "../../ api/request";
import LoaderWrapper from "../../components/common/hoc/LoaderWrapper/LoaderWrapper";

const ArticlesPreview = ({ isMyArticle }: any) => {
  const [data, setData] = useState({ articlesPreview: [], isLoading: false });
  const { userData } = useContext(UserDataContext);

  const photoUrl = userData?.photo_url;
  const articlesPreview = data.articlesPreview;
  const isLoading = data.isLoading;

  useEffect(() => {
    getArticlesIntro(data, setData);
  }, []);

  const content = () => {
    if (articlesPreview && articlesPreview.length > 0) {
      return articlesPreview.map((articlePreview) => {
        const { id, date, title, description } = articlePreview;

        return (
          <div style={{ display: "flex" }} key={id}>
            <Wrapper>
              <Link href="/article/[id]" as={`/article/${id}`}>
                <a>
                  <InfoAboutArticle photoUrl={photoUrl} date={date} />
                  <Title>{title}</Title>
                  <Description>{description}</Description>
                  <ReadMore>
                    <span>Читать дальше</span>
                    <ArrowRightIcon />
                  </ReadMore>
                </a>
              </Link>
            </Wrapper>
            {isMyArticle && <DeleteIcon onClick={() => deleteArticle(id, data, setData)} />}
          </div>
        );
      });
    } else {
      return <Text>{isMyArticle ? "Создай свою первую статью!" : "Пока ничего нет..."}</Text>;
    }
  };

  return (
    <>
      <LoaderWrapper isLoading={isLoading}>{content()}</LoaderWrapper>
    </>
  );
};

export default ArticlesPreview;
