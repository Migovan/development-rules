import { format, isToday, isYesterday } from "date-fns";

export const parseHtml = (content) => {
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
          // eslint-disable-next-line
          console.log("Unknown block type", block.type);
          // eslint-disable-next-line
          console.log(block);
          break;
      }
    });

  return html;
};

export const formattedDate = (date) => {
  const prefix = isToday(new Date(date))
    ? "сегодня в"
    : isYesterday(new Date(date))
    ? "вчера в"
    : "";

  const formatted = prefix
    ? `${prefix} ${format(new Date(date), "HH:mm")}`
    : format(new Date(date), "HH:mm MM.dd");

  return formatted;
};
