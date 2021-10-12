import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import CharacterTable from "./components/CharacterTable";
import Search from "./components/Search";
import axios from "axios";
import React, { useEffect, useState } from "react";

const hash = "c92947db2fd1b46319fb72fd45200acd";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [filterD, changeStatusD] = useState(false);
  const [filterA, changeStatusA] = useState(true);

  const setFilterDMethod = () => {
    if (filterD === true) {
      changeStatusD(false);
      changeStatusA(true);
    }
    console.log(filterD);
  };
  const setFilterAMethod = () => {
    if (filterA === true) {
      changeStatusD(true);
      changeStatusA(false);
    }
    console.log(filterA);
  };
  useEffect(() => {
    const fetch = async () => {
      const result = await axios(
        `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=75f68f03fc85ae774bc4fc166d995134&hash=${hash}&offset=100&limit=30`
      );

      console.log(result.data.data.results);
      setItems(result.data.data.results);
      setLoading(false);
    };

    fetch();
  }, [query]);

  return (
    <div>
      <div className="head">
        <Header />
        <Search search={(q) => setQuery(q)}></Search>
      </div>
      <div className="main">
        <div className="sc-hd-line"></div>
        <div className="container">
          <Menu setFilterD={setFilterDMethod} setFilterA={setFilterAMethod} />
          <CharacterTable
            items={items}
            isLoading={isLoading}
            FilterAsc={filterA}
            FilterDesc={filterD}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
