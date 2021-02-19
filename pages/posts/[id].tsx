import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { GetServerSideProps } from "next";

const FirstPost = (props) => {
  // console.log("props:", props);
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>{props.title}</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image
        src="/images/profile.jpg" // Route of the image file
        height={400} // Desired size with correct aspect ratio
        width={400} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query: { id } }) => {
  const res = await fetch(`https://api.github.com/repos/vercel/next.js/issues/${id}`);
  const json = await res.json();

  return {
    props: json,
  };
};

export default FirstPost;
