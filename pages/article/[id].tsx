import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import TextEditor from "../../components/TextEditor/TextEditor";
import redirect from "nextjs-redirect";

import { GetServerSideProps } from "next";

import dynamic from "next/dynamic";

const Article = (props) => {
  // console.log("props!!!!!:", props);

  const RedactorSSRSafe = dynamic(import("../../components/Article/Article"), {
    ssr: false,
  });

  return <RedactorSSRSafe articleData={props} />;
};

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:8081/api/articles/intro");
  const articles = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = articles.map((article) => ({
    params: { id: article.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export const getStaticProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(`http://localhost:8081/api/articles/${params.id}`);
  const articleData = await res.json();

  return {
    props: articleData,
  };
};

export default Article;
