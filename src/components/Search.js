import React, { useState } from "react";

const Search = ({ search }) => {
  const [text, setText] = useState("");

  const onSearch = (q) => {
    setText(q);
    search(q);
  };

  return (
    <section className="search">
      <input
        type="text"
        className="form-control"
        placeholder="Find a character"
        autoFocus
        onChange={(e) => onSearch(e.target.value)}
        value={text}
      />
    </section>
  );
};

export default Search;
