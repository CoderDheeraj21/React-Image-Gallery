import { useEffect, useState } from "react";
import { ImageCard } from "./Components/ImageCard";
import { SearchBar } from "./Components/SearchBar";

function App() {
  const [cards, setCards] = useState([]);
  const [term, setTerm] = useState("");


  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://pixabay.com/api/?key=46659648-7780cbb74fd8147ddf2265969&q=${term}&image_type=photo`
      );
      const data = await response.json();
      console.log(data.hits);
      setCards(data.hits);
    }

    fetchData();
  }, [term]);

  return (
    <>
      <SearchBar setTerm={setTerm}></SearchBar>
      <div className="grid grid-cols-3 gap-4">
        {cards.map((card) => (
          <ImageCard key={card.id} card={card}></ImageCard>
        ))}
      </div>
    </>
  );
}

export default App;
