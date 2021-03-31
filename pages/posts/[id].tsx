import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { GetServerSideProps } from "next";

const isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
};

const parseHtml = (content, setData) => {
  let html = "";
  content?.blocks?.length > 0 &&
    content.blocks.forEach(function (block) {
      switch (block.type) {
        case "header":
          html += `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
          break;
        case "paragraph":
          html += `<p>${block.data.text}</p>`;
          break;
        case "delimiter":
          html += "<hr />";
          break;
        case "image":
          html += `<img class="img-fluid" src="${block.data.file.url}" title="${block.data.caption}" /><br /><em>${block.data.caption}</em>`;
          break;
        case "list":
          html += "<ul>";
          block.data.items.forEach(function (li) {
            html += `<li>${li}</li>`;
          });
          html += "</ul>";
          break;
        default:
          console.log("Unknown block type", block.type);
          console.log(block);
          break;
      }
    });

  setData(html);
};

const FirstPost = (props) => {
  const [data, setData] = useState("");
  const { content, title } = props;
  useEffect(() => {
    parseHtml(JSON.parse(content), setData);
  }, []);

  console.log("props:", props);
  return (
    <>
      {data && (
        <>
          <h1>{title}</h1> <div dangerouslySetInnerHTML={{ __html: data }} />
        </>
      )}
      {/* <Image
        src="/images/profile.jpg" // Route of the image file
        height={400} // Desired size with correct aspect ratio
        width={400} // Desired size with correct aspect ratio
        alt="Your Name"
      />  */}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:8081/api/articles/${id}`);
  const json = await res.json();

  return {
    props: json,
  };
};

export default FirstPost;
