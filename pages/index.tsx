import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>DR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main>
        <Link href="/posts/[id]" as={`/posts/${12}`}>
          <a> this page!</a>
        </Link>
      </main> */}
    </div>
  );
};

export default Home;
