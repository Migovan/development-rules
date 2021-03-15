import Head from "next/head";
import Link from "next/link";
import Feeds from "../components/Feeds/Feeds";
import TelegramLoginButton from "react-telegram-login";

const Home = () => {
  const handleTelegramResponse = (response) => {
    console.log(response);
  };

  return (
    <div className="container">
      <Head>
        <title>Development rules</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Feeds />
      <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="developmentrules_bot" />
      {/* <main>
        <Link href="/posts/[id]" as={`/posts/${12}`}>
          <a> this page!</a>
        </Link>
      </main> */}
    </div>
  );
};

export default Home;
