import { parseHtml } from "../utils";
import { Methods } from "../enums/index";

const BASE_URL = "http://localhost:8081/api/articles";

const params = (method, body?) => ({
  method,
  headers: {
    "Content-Type": "application/json",
  },
  body,
});

export const getArticlesIntro = async (data, setData) => {
  setData({ ...data, isLoading: true });

  try {
    const res = await fetch(`${BASE_URL}/intro`, params(Methods.GET));
    const articlesPreview = await res.json();
    await setData({ articlesPreview, isLoading: false });
  } catch (e) {
    // eslint-disable-next-line
    return console.error(e);
  }
};

export const getArticle = async (id, data, setData) => {
  setData({ ...data, isLoading: true });
  try {
    const res = await fetch(`${BASE_URL}/${id}`, params(Methods.GET));
    const article = await res.json();
    const articleHtml = await parseHtml(JSON.parse(article?.content));
    await setData({ articleData: article, html: articleHtml, isLoading: false });
  } catch (e) {
    // eslint-disable-next-line
    return console.error(e);
  }
};

export const sendArticle = async (data) => {
  try {
    await fetch(BASE_URL, params(Methods.POST, JSON.stringify(data)));
  } catch (e) {
    // eslint-disable-next-line
    return console.error(e);
  }
};

export const deleteArticle = async (id, data, setData) => {
  setData({ ...data, isLoading: true });
  try {
    await fetch(`${BASE_URL}/${id}`, params(Methods.DELETE));
    await getArticlesIntro(data, setData);
  } catch (e) {
    // eslint-disable-next-line
    return console.error(e);
  }
};

export const editArticle = async (id, data, setData) => {
  try {
    await fetch(BASE_URL, params(Methods.PUT, JSON.stringify(data)));
    await getArticle(id, data, setData);
  } catch (e) {
    // eslint-disable-next-line
    return console.error(e);
  }
};
