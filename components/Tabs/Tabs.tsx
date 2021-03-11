import React, { useState } from "react";
import { Wrapper, ItemTab } from "./styles";
import Link from "next/link";

const TabNames = [
  { name: "Лента", id: "1", link: "/" },
  { name: "Мои публикации", id: "2", link: "/" },
  { name: "Написать", id: "3", link: "/sandbox" },
];

const Tabs = () => {
  const [checkedItem, setCheckedItem] = useState("1");
  return (
    <Wrapper>
      {TabNames.map((item) => (
        <Link href={item.link} key={item.name}>
          <ItemTab isActive={checkedItem === item.id} onClick={() => setCheckedItem(item.id)}>
            {item.name}
          </ItemTab>
        </Link>
      ))}
    </Wrapper>
  );
};

export default Tabs;
