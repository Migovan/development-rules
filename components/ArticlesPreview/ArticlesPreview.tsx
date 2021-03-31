import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Wrapper, NameWithDate, Title, Text } from "./styles";
import { getArticles, deleteArticle, editArticle } from "../../ api/request";
import { format } from "date-fns";
import { es, ru } from "date-fns/locale";
import { Console } from "node:console";

const ArticlesPreview = ({ isMyArticle }: any) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getArticles("/api/articles/intro", setData);
  }, []);

  console.log("data:", data);

  const content = () => {
    return data.map((previewData) => {
      const { id, date, title, description, content } = previewData;
      const dateFormat = format(new Date(date), "MM/dd/yyyy");
      console.log("content:", content);

      return (
        <Wrapper key={id}>
          <Link href="/article/[id]" as={`/article/${id}`}>
            <a>
              <NameWithDate>
                <div>{`Artem Migovan ${dateFormat}`}</div>
              </NameWithDate>
              <Title>{title}</Title>
              <div>{description}</div>
            </a>
          </Link>
          {isMyArticle && (
            <>
              <button onClick={() => deleteArticle("/api/articles/", id, setData)}>delete</button>
              {/* <button onClick={() => editArticle("/api/articles/", id)}>edit</button> */}
            </>
          )}
        </Wrapper>
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
