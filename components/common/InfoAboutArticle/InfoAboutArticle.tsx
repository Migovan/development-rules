import React from "react";
import { Wrapper, Name } from "./styles";
import Image from "next/image";
import { formattedDate } from "../../../utils";

const InfoAboutArticle = ({ photoUrl, date }) => {
  return (
    <Wrapper>
      {photoUrl && <Image className="avatar" src={photoUrl} height={30} width={30} alt="Your" />}
      <Name>migovan</Name>
      <time>{formattedDate(date)}</time>
    </Wrapper>
  );
};

export default InfoAboutArticle;
