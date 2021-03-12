import Head from "next/head";
import MyFeedsComponent from "../components/MyFeeds/MyFeedsComponent";

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>My Feeds</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyFeedsComponent />
    </div>
  );
};

export default Home;
