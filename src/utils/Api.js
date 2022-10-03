function Api(lang, text) {
  return fetch(
    `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20220929T092800Z.5954d8a03f2e8536.536b1e6b42797705cc8597002055dc25e3ee81a7&lang=${lang}&text=${text}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

export default Api;
