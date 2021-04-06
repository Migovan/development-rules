import { useContext } from "react";
import Head from "next/head";
import ArticlesPreview from "../components/ArticlesPreview/ArticlesPreview";
import UserDataContext from "../components/Context/user-data";
import redirect from "nextjs-redirect";

const Redirect = redirect("/login");

const Articles = () => {
  const { userData } = useContext(UserDataContext);

  return (
    <>
      <Head>
        <title>Development rules</title>
      </Head>
      {userData.id ? <ArticlesPreview /> : <Redirect />}
    </>
  );
};

export default Articles;
