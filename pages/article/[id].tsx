import React, { useEffect } from "react";

import { GetServerSideProps } from "next";

import dynamic from "next/dynamic";

const Article = (props) => {
  const RedactorSSRSafe = dynamic(import("../../components/Article/Article"), {
    ssr: false,
  });

  return <RedactorSSRSafe articleData={props} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(`http://localhost:8081/api/articles/${params.id}`);
  const articleData = await res.json();

  return {
    props: articleData,
  };
};

export default Article;
