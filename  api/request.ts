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

export const deleteArticle = async (url, id) => {
  try {
    await fetch(`http://localhost:8081${url}${id}`, {
      method: "DELETE",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    return console.error(e);
  }
};
