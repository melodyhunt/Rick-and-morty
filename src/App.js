import "./App.css";
import Navbar from "./components/navbar";
import React, { useEffect, useState } from "react";
import Characters from "./components/characters";
import Pagination from "./components/paginationChar";

function App() {
  const [characters, setcharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialurl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (initialurl) => {
    fetch(initialurl)
      .then((response) => response.json())
      .then((data) => {
        setcharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevius = () => {
    fetchCharacters(info.prev);
  };
  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(initialurl);
  }, []);

  return (
    <div className="bg-fondo">
      <Navbar />
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevius={onPrevius}
        onNext={onNext}
      />
      <Characters characters={characters} />
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevius={onPrevius}
        onNext={onNext}
      />
    </div>
  );
}

export default App;
