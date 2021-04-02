import { parseHtml } from "../utils";

export const sendArticle = async (url, data) => {
  try {
    await fetch(`http://localhost:8081${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (e) {
    return console.error(e);
  }
};

export const getArticles = async (data, setData) => {
  setData({ ...data, isLoading: true });
  try {
    const res = await fetch("http://localhost:8081/api/articles/intro", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const articlesPreview = await res.json();
    await setData({ articlesPreview, isLoading: false });
  } catch (e) {
    return console.error(e);
  }
};

export const getArticle = async (id, data, setArticleData) => {
  setArticleData({ ...data, isLoading: true });
  try {
    const res = await fetch(`http://localhost:8081/api/articles/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const article = await res.json();
    const articleHtml = await parseHtml(JSON.parse(article?.content));
    await setArticleData({ articleData: article, html: articleHtml, isLoading: false });
  } catch (e) {
    return console.error(e);
  }
};

export const deleteArticle = async (id, data, setData) => {
  setData({ ...data, isLoading: true });
  try {
    await fetch(`http://localhost:8081/api/articles/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //рефакторинг!
    const res = await fetch(`http://localhost:8081/api/articles/intro`);
    const articlesPreview = await res.json();
    await setData({ articlesPreview, isLoading: false });
  } catch (e) {
    return console.error(e);
  }
};

export const editArticle = async (data, setData, id) => {
  try {
    await fetch(`http://localhost:8081/api/articles`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    //рефакторинг!
    const res = await fetch(`http://localhost:8081/api/articles/${id}`);
    const article = await res.json();
    const articleHtml = await parseHtml(JSON.parse(article?.content));
    await setData({ data: article, html: articleHtml });
  } catch (e) {
    return console.error(e);
  }
};
