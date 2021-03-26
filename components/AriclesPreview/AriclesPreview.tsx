import { Wrapper, NameWithDate, Title, Text } from "./styles";
import { deleteArticle } from "../../ api/request";
import { format } from "date-fns";
import { es, ru } from "date-fns/locale";

const AriclesPreview = ({ ariclesPreview }: any) => {
  console.log("ariclesPreview:", ariclesPreview);

  return ariclesPreview.length > 0 ? (
    ariclesPreview.map((previewData) => {
      const { id, date, title, description } = previewData;
      const dateFormat = format(new Date(date), "MM/dd/yyyy");

      return (
        <Wrapper key={id}>
          <NameWithDate>
            <div>{`Artem Migovan ${dateFormat}`}</div>
            {/* <time>{dateFormat}</time> */}
          </NameWithDate>
          <Title>{title}</Title>
          <div>{description}</div>
          {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
          {/* <button onClick={() => deleteArticle("/api/articles/", id)}>delete</button>
          <button onClick={() => deleteArticle("/api/articles/", id)}>edit</button> */}
        </Wrapper>
      );
    })
  ) : (
    <Text>Пока ничего нет...</Text>
  );
};

export default AriclesPreview;
