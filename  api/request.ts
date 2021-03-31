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
    const ariclesPreview = await res.json();
    await setData(ariclesPreview);
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
    const res = await fetch(`http://localhost:8081/api/articles/intro`);
    const ae = await res.json();
    await setData(ae);
  } catch (e) {
    return console.error(e);
  }
};

export const editArticle = async (data) => {
  try {
    await fetch(`http://localhost:8081/api/articles`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (e) {
    return console.error(e);
  }
};
