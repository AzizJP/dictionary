import { memo } from "react";

function Main({
  handleSubmit,
  enteredText,
  handleChange,
  translatedWord,
  synonyms,
  examples,
  exampleTranslate,
}) {
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
        <li className="main-section__response-text">{`Перевод: ${translatedWord}`}</li>
        <li className="main-section__response-text">{`Синонимы: ${synonyms}`}</li>
        <li className="main-section__response-text">{`Примеры: ${examples} / ${exampleTranslate}`}</li>
      </ul>
    </section>
  );
}

export default memo(Main);
