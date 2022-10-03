import React, { memo } from "react";

function Main({
  handleSubmit,
  enteredText,
  handleChange,
  translatedWord,
  synonyms,
  examples,
  exampleTranslate,
}) {
  const synonymsToString = synonyms.toString().split(",").join(" / ");
  const examplesToString = examples.toString().split(",").join(" / ");
  const exampleTranslateToString = exampleTranslate
    .toString()
    .split(",")
    .join(" / ");

  return (
    <section className="main-section">
      <form className="main-section__form" onSubmit={handleSubmit}>
        <input
          className="main-section__input"
          value={enteredText}
          onChange={handleChange}
          placeholder="Введите слово"
        ></input>
        <button type="submit" className="main-section__button">
          Поиск
        </button>
      </form>
      <ul className="main-section__response-container">
        <li>
          <h3 className="main-section__subtitle">Перевод:</h3>
          <p className="main-section__response-text">{translatedWord}</p>
        </li>
        <li>
          <h3 className="main-section__subtitle">Синонимы:</h3>
          <p className="main-section__response-text">{synonymsToString}</p>
        </li>
        <li>
          <h3 className="main-section__subtitle">Примеры:</h3>
          <p className="main-section__response-text">{examplesToString}</p>
          <p className="main-section__response-text">
            {exampleTranslateToString}
          </p>
        </li>
      </ul>
    </section>
  );
}

export default memo(Main);
