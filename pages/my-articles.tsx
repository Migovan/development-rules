import Head from "next/head";
import MyArticles from "../components/MyArticles/MyArticles";

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>My Feeds</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyArticles />
    </div>
  );
};

export default Home;
