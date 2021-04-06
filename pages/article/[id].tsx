import React from "react";
import dynamic from "next/dynamic";

const Article = () => {
  const RedactorSSRSafe = dynamic(import("../../components/Article/Article"), {
    ssr: false,
  });

  return <RedactorSSRSafe />;
};

export default Article;
