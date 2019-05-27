import React from "react";
import { characters } from "./data";
const CharacterProfile = props => {
  return (
    <div className="character-profile">
      <h2 className="character-profile__title">
        {characters[props.name].name}
      </h2>
      <img
        src={characters[props.name].image}
        alt={characters[props.name].name}
        className="character-profile__image"
      />
      <ul className="character-profile__skills">
        Skills:
        {characters[props.name].skills.map(skill => {
          return <li className="character-profile__skills">{skill}</li>;
        })}
      </ul>
    </div>
  );
};

export default CharacterProfile;
