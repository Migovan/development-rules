import Head from "next/head";
import Link from "next/link";
import SandboxEditor from "../components/SandboxEditor/SandboxEditor";

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Sandbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SandboxEditor />
    </div>
  );
};

export default Home;
