import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Wrapper, NameWithDate, Title, Text } from "./styles";
import { getArticles, deleteArticle } from "../../ api/request";
import { format } from "date-fns";
import { es, ru } from "date-fns/locale";

const AriclesPreview = ({ isMyArticle }: any) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getArticles("/api/articles/intro", setData);
  }, []);

  console.log("data:", data);

  const content = () => {
    return data.map((previewData) => {
      const { id, date, title, description } = previewData;
      const dateFormat = format(new Date(date), "MM/dd/yyyy");
      console.log("previewData:", previewData);

      return (
        <Link key={id} href="/posts/[id]" as={`/posts/${id}`}>
          <a>
            <Wrapper>
              <NameWithDate>
                <div>{`Artem Migovan ${dateFormat}`}</div>
              </NameWithDate>
              <Title>{title}</Title>
              <div>{description}</div>
              {isMyArticle && (
                <>
                  <button onClick={() => deleteArticle("/api/articles/", id, setData)}>
                    delete
                  </button>
                  {/* <button onClick={() => deleteArticle("/api/articles/", id)}>edit</button> */}
                </>
              )}
            </Wrapper>
          </a>
        </Link>
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

export default AriclesPreview;
