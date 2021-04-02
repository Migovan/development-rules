import React, { useState, useEffect, useContext } from "react";
import UserDataContext from "../../components/Context/user-data";
import Link from "next/link";
import InfoAboutArticle from "../common/InfoAboutArticle/InfoAboutArticle";
import { Wrapper, Title, Text, Description, DeleteIcon, ReadMore, ArrowRightIcon } from "./styles";
import { getArticles, deleteArticle } from "../../ api/request";

const ArticlesPreview = ({ isMyArticle }: any) => {
  const [data, setData] = useState([]);
  const { userData } = useContext(UserDataContext);

  const photoUrl = userData?.photo_url;

  useEffect(() => {
    getArticles("/api/articles/intro", setData);
  }, []);

  const content = () => {
    return data.map((previewData) => {
      const { id, date, title, description } = previewData;

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
          {isMyArticle && (
            <DeleteIcon onClick={() => deleteArticle("/api/articles/", id, setData)} />
          )}
        </div>
      );
    });
  };

  return (
    <>
      {data.length > 0 ? (
        content()
      ) : (
        <Text>{isMyArticle ? "Создай свою первую статью!" : "Пока ничего нет..."} </Text>
      )}
    </>
  );
};

export default ArticlesPreview;
