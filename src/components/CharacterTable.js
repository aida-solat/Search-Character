import React from "react";
import CharacterItem from "./CharacterItem";

const CharacterTable = ({ items, isLoading, FilterAsc, FilterDesc }) => {
  console.log(items);
  console.log(FilterAsc);
  console.log(FilterDesc);
  if (FilterDesc === true) {
    return isLoading ? (
      <h1>Loading</h1>
    ) : (
      <section className="contents">
        {items
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((item, key) => (
            <CharacterItem key={key} item={item}></CharacterItem>
          ))}
      </section>
    );
  } else if (FilterAsc === true) {
    return isLoading ? (
      <h1>Loading</h1>
    ) : (
      <section className="contents">
        {items
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .reverse()
          .map((item, key) => (
            <CharacterItem key={key} item={item}></CharacterItem>
          ))}
      </section>
    );
  } else {
    return isLoading ? (
      <h1>Loading</h1>
    ) : (
      <section className="contents">
        {items.map((item, key) => (
          <CharacterItem key={key} item={item}></CharacterItem>
        ))}
      </section>
    );
  }
};

export default CharacterTable;
