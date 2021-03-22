import { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import Articles from "../components/Articles/Articles";
import UserDataContext from "../components/Context/user-data";
import redirect from "nextjs-redirect";
import { InferGetStaticPropsType } from "next";

const Redirect = redirect("/login");

const Home = ({ ariclesData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { userData } = useContext(UserDataContext);

  return (
    <div className="container">
      <Head>
        <title>Development rules</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {userData.id ? <Articles ariclesData={ariclesData} /> : <Redirect />}
      {/* <main>
        <Link href="/posts/[id]" as={`/posts/${12}`}>
          <a> this page!</a>
        </Link>
      </main> */}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:8081/api/articles");
  const ariclesData = await res.json();

  return {
    props: {
      ariclesData,
    },
  };
}

export default Home;
