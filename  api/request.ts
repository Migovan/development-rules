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
