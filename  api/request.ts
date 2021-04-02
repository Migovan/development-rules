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

export const getArticles = async (url, setData) => {
  try {
    const res = await fetch(`http://localhost:8081${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const articlesPreview = await res.json();
    await setData(articlesPreview);
  } catch (e) {
    return console.error(e);
  }
};

export const getArticle = async (id, setArticleData) => {
  try {
    const res = await fetch(`http://localhost:8081/api/articles/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const article = await res.json();
    const articleHtml = await parseHtml(JSON.parse(article?.content));
    await setArticleData({ data: article, html: articleHtml });
  } catch (e) {
    return console.error(e);
  }
};

export const deleteArticle = async (url, id, setData) => {
  try {
    await fetch(`http://localhost:8081${url}${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //рефакторинг!
    const res = await fetch(`http://localhost:8081/api/articles/intro`);
    const ae = await res.json();
    await setData(ae);
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
