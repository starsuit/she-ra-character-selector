import React from "react";
import { characters } from "./data";

const CharacterCard = props => {
  const focusCard = React.useRef(null);
  React.useEffect(() => {
    if (props.selected) focusCard.current.focus();
  }, [props.selected]);
  return (
    <li
      ref={focusCard}
      className="character-card"
      tabIndex="-1"
      onClick={() => {
        props.setCharacterIndex(props.index);
      }}
    >
      <div
        className={
          "character-card__card " +
          (props.selected ? "character-card__card--selected" : "")
        }
      >
        <h2 className="character-card__title">{characters[props.name].name}</h2>
        <img
          src={characters[props.name].image}
          alt={characters[props.name].name}
          className="character-card__image"
        />
      </div>
    </li>
  );
};

export default CharacterCard;
