import { Wrapper } from "./styles";

const Feeds = ({ aricles }: any) => {
  console.log("aricles1:", aricles);

  return (
    aricles &&
    aricles.map((i) => {
      return <div key={i.id} dangerouslySetInnerHTML={{ __html: i.content }} />;
    })
  );
  //   return <Wrapper>Пока ничего нет...</Wrapper>;
};

export default Feeds;
