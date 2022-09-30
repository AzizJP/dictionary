function Api(lang, text) {
  return fetch(
    `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=&lang=${lang}&text=${text}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

export default Api;
