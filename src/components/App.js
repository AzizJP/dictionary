import { useCallback, useState } from "react";
import Api from "../utils/Api";

function App() {
  const [translatedWord, setTranslatedWord] = useState("");
  const [synonyms, setSynonyms] = useState("");
  const [examples, setExamples] = useState("");
  const [exampleTranslate, setExampleTranslate] = useState("");
  const [language, setLanguage] = useState("en-ru");
  const [enteredText, setEnteredText] = useState("");

  const findWord = useCallback(() => {
    Api(language, enteredText).then((result) => {
      if (!result.def[0]) {
        console.log("Нет такого слова");
        setTranslatedWord("");
        setSynonyms("");
        setExamples("");
        setExampleTranslate("");
        return;
      } else {
        setTranslatedWord(result.def[0].tr[0].text);
      }
      let synonymArr = result.def[0].tr[0].syn;
      if (!synonymArr) {
        console.log("Нет синонимов");
        setSynonyms("отсутствуют");
      } else {
        setSynonyms(
          synonymArr.map(function (item) {
            return item.text;
          })
        );
      }
      let exampleArr = result.def[0].tr[0].ex;
      if (!exampleArr) {
        console.log("Нет примеров");
        setExamples("отсутствуют");
        setExampleTranslate("");
      } else {
        setExamples(
          exampleArr.map(function (item) {
            setExampleTranslate(
              exampleArr.map(function (item2) {
                return item2.tr[0].text;
              })
            );
            return item.text;
          })
        );
      }
    });
  }, [language, enteredText, setTranslatedWord, setSynonyms, setExamples]);

  function handleChange(event) {
    setEnteredText(event.target.value);
  }

  function handleSubmit(event) {
    findWord();
    setEnteredText("");
    event.preventDefault();
  }

  function languageChangeToRu() {
    setLanguage("ru-en");
  }

  function languageChangeToEn() {
    setLanguage("en-ru");
  }

  return (
    <div className="App">
      <button onClick={languageChangeToEn}>en-ru</button>
      <button onClick={languageChangeToRu}>ru-en</button>
      <form className="form" onSubmit={handleSubmit}>
        <p>Введи слово</p>
        <input
          className="input"
          value={enteredText}
          onChange={handleChange}
        ></input>
        <button type="submit">Найти</button>
        <div className="response">
          <p>{`Перевод: ${translatedWord}`}</p>
          <p>{`Синонимы: ${synonyms}`}</p>
          <p>{`Примеры: ${examples} / ${exampleTranslate}`}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
