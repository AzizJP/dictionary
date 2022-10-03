import { useCallback, useState } from "react";
import Api from "../utils/Api";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [translatedWord, setTranslatedWord] = useState("");
  const [synonyms, setSynonyms] = useState("");
  const [examples, setExamples] = useState("");
  const [exampleTranslate, setExampleTranslate] = useState("");
  const [isEnButtonActive, setIsEnButtonActive] = useState(true);
  const [isRuButtonActive, setIsRuButtonActive] = useState(false);
  const [enteredText, setEnteredText] = useState("");

  const findWord = useCallback(() => {
    Api(isEnButtonActive, enteredText).then((result) => {
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
  }, [
    isEnButtonActive,
    enteredText,
    setTranslatedWord,
    setSynonyms,
    setExamples,
  ]);

  function handleChange(event) {
    setEnteredText(event.target.value);
  }

  function handleSubmit(event) {
    findWord();
    event.preventDefault();
  }

  const changerInputLanguage = () => {
    setIsEnButtonActive(!isEnButtonActive);
    setIsRuButtonActive(!isRuButtonActive);
  };

  return (
    <div className="page">
      <div className="container">
        <Header
          changerInputLanguage={changerInputLanguage}
          isEnButtonActive={isEnButtonActive}
        />
        <Main
          handleSubmit={handleSubmit}
          enteredText={enteredText}
          handleChange={handleChange}
          translatedWord={translatedWord}
          synonyms={synonyms}
          examples={examples}
          exampleTranslate={exampleTranslate}
        />
      </div>
    </div>
  );
}

export default App;
