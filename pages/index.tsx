import { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import AriclesPreview from "../components/AriclesPreview/AriclesPreview";
import UserDataContext from "../components/Context/user-data";
import redirect from "nextjs-redirect";
import { InferGetStaticPropsType } from "next";

const Redirect = redirect("/login");

const Home = ({ ariclesPreview }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { userData } = useContext(UserDataContext);
  console.log("ariclesPreview:", ariclesPreview);

  return (
    <div className="container">
      <Head>
        <title>Development rules</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {userData.id ? <AriclesPreview ariclesPreview={ariclesPreview} /> : <Redirect />}
      {/* <main>
        <Link href="/posts/[id]" as={`/posts/${12}`}>
          <a> this page!</a>
        </Link>
      </main> */}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:8081/api/articles/intro");
  const ariclesPreview = await res.json();

  return {
    props: {
      ariclesPreview,
    },
  };
}

export default Home;
