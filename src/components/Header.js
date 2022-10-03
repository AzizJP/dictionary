import { memo } from "react";

function Header({ changerInputLanguage, isEnButtonActive }) {
  return (
    <header className="header">
      <h1 className="header__title">Словарь</h1>
      <div className="header__buttons">
        <button className="header__button" onClick={changerInputLanguage}>
          {`Язык ввода: ${isEnButtonActive ? "EN" : "RU"}`}
        </button>
      </div>
    </header>
  );
}

export default memo(Header);
