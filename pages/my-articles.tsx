import { useContext } from "react";
import Head from "next/head";
import ArticlesPreview from "../components/ArticlesPreview/ArticlesPreview";
import UserDataContext from "../components/Context/user-data";
import redirect from "nextjs-redirect";

const Redirect = redirect("/login");

const Home = () => {
  const { userData } = useContext(UserDataContext);

  return (
    <div className="container">
      <Head>
        <title>Development rules</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticlesPreview isMyArticle />
    </div>
  );
};

export default Home;
