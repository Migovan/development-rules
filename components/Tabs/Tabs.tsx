import React from "react";
import { Wrapper, ItemTab } from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";

const TabNames = [
  { name: "Лента", link: "/" },
  { name: "Мои публикации", link: "/my-articles" },
  { name: "Написать", link: "/text-editor" },
];

const Tabs = () => {
  const router = useRouter();

  const pathname = router.pathname;
  const isActive = (link) => {
    return pathname === link && pathname !== "/article/[id]";
  };

  return (
    <Wrapper>
      {TabNames.map((item) => {
        const { link, name } = item;
        return (
          <Link href={link} key={name}>
            <ItemTab isActive={isActive(link)}>{item.name}</ItemTab>
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default Tabs;
