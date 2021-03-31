import React, { useState } from "react";
import { Wrapper, ItemTab } from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";

const TabNames = [
  { name: "Лента", id: "1", link: "/" },
  { name: "Мои публикации", id: "2", link: "/my-articles" },
  { name: "Написать", id: "3", link: "/text-editor" },
];

const Tabs = () => {
  const [checkedItem, setCheckedItem] = useState("");
  const router = useRouter();

  const pathname = router.pathname;

  return (
    <Wrapper>
      {TabNames.map((item) => {
        const { id, link, name } = item;
        return (
          <Link href={link} key={name}>
            <ItemTab
              isActive={checkedItem === id || pathname === link}
              onClick={() => setCheckedItem(item.id)}
            >
              {item.name}
            </ItemTab>
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default Tabs;
