import Head from "next/head";
import Link from "next/link";
import NewsFeed from "../components/NewsFeed/NewsFeed";

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Development rules</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewsFeed />
      {/* <main>
        <Link href="/posts/[id]" as={`/posts/${12}`}>
          <a> this page!</a>
        </Link>
      </main> */}
    </div>
  );
};

export default Home;
