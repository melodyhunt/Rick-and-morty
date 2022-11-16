import "./App.css";
import Navbar from "./components/navbar";
import React, { useEffect, useState } from "react";
import Characters from "./components/characters";

function App() {
  const [characters, setcharacters] = useState([]);

  const initialurl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (initialurl) => {
    fetch(initialurl)
      .then((response) => response.json())
      .then((data) => setcharacters(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharacters(initialurl);
  }, []);

  return (
    <div className="bg-fondo">
      <Navbar />
      <div className="">
        <Characters characters={characters} />
      </div>
    </div>
  );
}

export default App;
