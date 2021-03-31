import { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import AriclesPreview from "../components/AriclesPreview/AriclesPreview";
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
      <AriclesPreview isMyArticle />
    </div>
  );
};

export default Home;
