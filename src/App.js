import React from "react";
import "./App.css";
import CharacterList from "./CharacterList";
import CharacterProfile from "./CharacterProfile";
import { characterNames } from "./data";

function App() {
  const [characterIndex, setCharacterIndex] = React.useState(0);
  const characterName = characterNames[characterIndex];
  React.useEffect(() => {
    function handleKeydown(event) {
      const key = event.key;
      switch (key) {
        case "ArrowRight":
          setCharacterIndex(oldIndex => {
            event.preventDefault();
            return (oldIndex + 1) % characterNames.length;
          });
          break;
        case "ArrowLeft":
          setCharacterIndex(oldIndex => {
            event.preventDefault();
            return (
              ((oldIndex < 1 ? oldIndex + characterNames.length : oldIndex) -
                1) %
              characterNames.length
            );
          });
          break;
        case "ArrowUp":
          setCharacterIndex(oldIndex => {
            event.preventDefault();
            return (
              ((oldIndex < 4 ? oldIndex + characterNames.length : oldIndex) -
                4) %
              characterNames.length
            );
          });
          break;
        case "ArrowDown":
          setCharacterIndex(oldIndex => {
            event.preventDefault();
            return (oldIndex + 4) % characterNames.length;
          });
          break;
        default:
          break;
      }
    }
    window.addEventListener("keydown", handleKeydown);
    // cleanup function
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <main>
      <h1>She-Ra</h1>
      <div className="content-container">
        <CharacterList
          selected={characterIndex}
          setCharacterIndex={setCharacterIndex}
        />
        <CharacterProfile name={characterName} />
      </div>
    </main>
  );
}

export default App;
