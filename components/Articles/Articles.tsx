import { Wrapper } from "./styles";
import { deleteArticle } from "../../ api/request";

const Articles = ({ ariclesData }: any) => {
  console.log("aricles1:", ariclesData);

  return ariclesData ? (
    ariclesData.map((aricle) => {
      const { id, content } = aricle;
      return (
        <div key={id}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <button onClick={() => deleteArticle("/api/articles/", id)}>delete</button>
          <button onClick={() => deleteArticle("/api/articles/", id)}>edit</button>
        </div>
      );
    })
  ) : (
    <Wrapper>Пока ничего нет...</Wrapper>
  );
  //   return <Wrapper>Пока ничего нет...</Wrapper>;
};

export default Articles;
