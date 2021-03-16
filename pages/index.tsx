import { useState, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import Feeds from "../components/Feeds/Feeds";
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
      {userData.id ? <Feeds /> : <Redirect />}
      {/* <main>
        <Link href="/posts/[id]" as={`/posts/${12}`}>
          <a> this page!</a>
        </Link>
      </main> */}
    </div>
  );
};

export default Home;
