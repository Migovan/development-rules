import React, { useState, useEffect, useContext } from "react";
import UserDataContext from "../../components/Context/user-data";
import Link from "next/link";
import {
  Wrapper,
  UserInfo,
  Title,
  Text,
  Name,
  Description,
  DeleteIcon,
  ReadMore,
  ArrowRightIcon,
} from "./styles";
import { getArticles, deleteArticle } from "../../ api/request";
import { format, isToday, isYesterday } from "date-fns";
import Image from "next/image";

const ArticlesPreview = ({ isMyArticle }: any) => {
  const [data, setData] = useState([]);
  const { userData } = useContext(UserDataContext);

  useEffect(() => {
    getArticles("/api/articles/intro", setData);
  }, []);

  const content = () => {
    return data.map((previewData) => {
      const { id, date, title, description } = previewData;

      const prefix = isToday(new Date(date))
        ? "сегодня в "
        : isYesterday(new Date(date))
        ? "вчера в"
        : "";

      const formatted = prefix
        ? `${prefix} ${format(new Date(date), "HH:mm")}`
        : format(new Date(date), "HH:mm MM.dd");

      return (
        <div style={{ display: "flex" }} key={id}>
          <Wrapper>
            <Link href="/article/[id]" as={`/article/${id}`}>
              <a>
                <UserInfo>
                  {userData.photo_url && (
                    <Image
                      className="avatar"
                      src={userData.photo_url}
                      height={30}
                      width={30}
                      alt="Your"
                    />
                  )}
                  <Name>migovan</Name>
                  <time>{formatted}</time>
                </UserInfo>
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
