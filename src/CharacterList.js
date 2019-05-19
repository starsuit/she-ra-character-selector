import React from "react";
import CharacterCard from "./CharacterCard";
import { characterNames } from "./data";

const CharacterList = props => {
  return (
    <ul className="character-list">
      {characterNames.map((character, index) => {
        return (
          <CharacterCard
            name={character}
            key={character}
            setCharacterIndex={props.setCharacterIndex}
            selected={index === props.selected}
            index={index}
          />
        );
      })}
    </ul>
  );
};

export default CharacterList;
