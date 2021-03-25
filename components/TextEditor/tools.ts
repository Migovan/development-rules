import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import ImageTool from "@editorjs/image";

// or if you inject ImageTool via standalone script

export default {
  header: {
    class: Header,
    config: {
      placeholder: "Заголовок...",
      levels: [1, 2, 3, 4],
      defaultLevel: 2,
    },
    inlineToolbar: true,
  },
  paragraph: {
    placeholder: "Параграф...",
    class: Paragraph,
    inlineToolbar: true,
  },
  list: {
    placeholder: "Список...",
    class: List,
    inlineToolbar: true,
  },
  image: {
    class: ImageTool,
    // config: {
    //   endpoints: {
    //     byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
    //     byUrl: "http://localhost:8008/fetchUrl", // Your endpoint that provides uploading by Url
    //   },
    // },
  },
};
