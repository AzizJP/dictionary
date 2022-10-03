import { memo } from "react";

function Header({ changerInputLanguage, isEnButtonActive }) {
  return (
    <header className="header">
      <h1 className="header__title">Словарь</h1>
      <div className="header__buttons">
        <h2 className="header__subtitle">Язык ввода:</h2>
        <button className="header__button" onClick={changerInputLanguage}>
          {isEnButtonActive ? "EN" : "RU"}
        </button>
      </div>
    </header>
  );
}

export default memo(Header);
