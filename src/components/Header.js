import React from "react";

function Header({ changerInputLanguage, isEnButtonActive }) {
  return (
    <header className="header">
      <h1>Словарь</h1>
      <div className="header__buttons">
        <button
          className="header__button header__batton_active"
          onClick={changerInputLanguage}
        >
          {isEnButtonActive ? "EN" : "RU"}
        </button>
      </div>
    </header>
  );
}

export default React.memo(Header);
